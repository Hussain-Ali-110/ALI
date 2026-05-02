import mongoose, { Schema, Document } from 'mongoose'

export interface IMessage extends Document {
  name: string
  email: string
  message: string
  timestamp: Date
  read: boolean
}

const MessageSchema = new Schema<IMessage>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name too long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message too short'],
    maxlength: [2000, 'Message too long'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  read: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.models.Message || mongoose.model<IMessage>('Message', MessageSchema)
