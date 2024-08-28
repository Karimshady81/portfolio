const Contacts = require('../Models/contacts');

const contact_create_post = (req, res) => {
    const contact = new Contacts(req.body);

    contact.save()
            .then((result) => {
                res.redirect('/')
            })
            .catch((err) => {
                console.error(err);
            });
};


module.exports = {
    contact_create_post
}
 