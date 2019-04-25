import Errors from "./Errors"

/**
 * Class that repersents a form. 
 * The constuctor creates an instance of Errors that
 * will hold any errors that are created when submitting a form.
 */
export default class Form {

    /**
     * Creates instance of Form class
     * @param {string} url to send form to when submitting
     * @param {object} data that this form should hold
     */
    constructor(data) {
        this.originalData = data
        this.errors = new Errors()

        for(let field in data) {
            this[field] = data[field]
        }

        
    }

    /**
     * Returns the lastest data for the fields in the form
     * @returns {object} The lastest data for the fields that was entered into the form
     */
    data() {
        let data = {}

        for(let property in this.originalData) {
            data[property] = this[property]
        }

        return data;
    }

    /**
     * Resets all form data and clears errors
     */
    reset() {
        for(let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear()
    }

    /**
     * Send request to a url with form data
     * Request type comes from form constructor
     * Authorization header is configured if required
     * @returns {Promise} Promise object represents the result of the axios request
     */
    submit() {
        var app = this
        emailjs.init("user_68LGMM5kdDONBLnVWKPKg");

        // axios
        return new Promise((resolve, reject) => {
            
            emailjs.send('gmail', 'template_jugXseDE', app.data())
                .then(response => {
                    resolve(response.text)
                })
                .catch(error => {
                    reject(error)
                });
        })
    }

}