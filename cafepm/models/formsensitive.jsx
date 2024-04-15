import mongoose, { Schema } from "mongoose"

const formSensitiveSchema = new Schema(
    {
        creationDate: String,
        id: String,
        folderID: String,
        type: String,
        reprompt: Boolean,
        favourite: Boolean,
        name: String,
        notes: String,
    }
)

const FormAcc =mongoose.models.FormAcc || mongoose.model("Account", formSensitiveSchema)

export default FormAcc