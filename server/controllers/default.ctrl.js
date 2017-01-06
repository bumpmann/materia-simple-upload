const multer  = require('multer')

class DefaultCtrl {
	constructor(app) {
	    this.app = app;
	    this.upload = multer({ dest: app.path + '/web/uploads/' })
	}
	
    uploadAvatar(req, res, next) {
        this.upload.single('avatar')(req, res, () => {
            // req.file is the `avatar` file
            // req.body will hold the text fields, if there were any
            console.log(req.file)
            console.log(req.body)
            res.send("ok")
        })
    }
}

module.exports = DefaultCtrl;
