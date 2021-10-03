const Notification = require("../models/Notification");
const asyncHandler = require("express-async-handler");

exports.createNotification = asyncHandler(async (req, res, next) => {
    const { senderEmail, receipientEmail, type, title, description, read } = req.body;

    try{
        const notification = await Notification.create({
            type,
            title,
            description,
            read,
            receipientEmail,
            senderEmail
          });
        
            res.status(201).json({
              success: {
                notification: {
                  id: notification._id,
                  type: notification.type,
                  title: notification.title,
                  description: notification.description,
                  read: notification.read,
                  receipientEmail: notification.receipientEmail,
                  senderEmail: notification.senderEmail
                }
              }
            });
    }catch(e){
        res.status(500);
        throw new Error("Something went wrong, please try again");
    }
  });

  exports.markNotificationAsRead = asyncHandler(async (req, res, next) => {
    
    try{
        const {id} = req.params;
        const notification = await Notification.findById(id);
        notification.toggleReadStatus();

          res.status(200).json({
            success: {
              notification: {
                id: notification._id,
                description: notification.description,
                read: notification.read
              }
            }
          });
    }catch(e){
        res.status(500);
        throw new Error("Something went wrong, please try again"); 
    }
  });

  exports.getAllNotifications = asyncHandler(async (req, res, next) => {
    
    try{
        const notifications = await Notification.find();

        res.status(200).json({
              success: notifications
            });
    }catch(e){
        res.status(500);
        throw new Error("Something went wrong, please try again");  
    }
    
  });

  exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {
    
    try{
        const notifications = await Notification.find({read: false});

        res.status(200).json({
              success: notifications
            });
    }catch(e){
        res.status(500);
        throw new Error("Something went wrong, please try again");  
    }
    
  });