const mongoose = require('mongoose');
const Order = mongoose.model('Order');

module.exports.placeOrder = (req, res, next) => {
       var order = new Order();
       order.userID = req._id;

   order.carDetails.colour = req.body.carDetails.colour;
   order.carDetails.number  = req.body.carDetails.number 
   order.carDetails.company = req.body.carDetails.company
   order.carDetails.polo = req.body.carDetails.polo;
   order.orderDetails.cost = req.body.orderDetails.cost;
   order.orderDetails.Address = req.body.orderDetails.Address

    order.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
                res.status(422).send(['Failed to place order']);
        }
    });
}

module.exports.retreiveOrders = (req,res,next) => {
    Order.find({ userID: req._id },
        (err, order) => {
            if (!order)
                return res.status(404).json({ status: false, message: 'No orders found' });
            else
                return res.status(200).json({ status: true, orders : order});
        }
    );
}