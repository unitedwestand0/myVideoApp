import mongoose, { Document, Model, Schema } from "mongoose";

export interface IVideo extends Document {
  title?: string;
  description?: string;
  uploadeBy: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  key: string;
  path: string;
  isPrivate: boolean;
  thumbNail?: string;
}
const videoSchema: Schema = new Schema(
  {
    title: { type: String, default: "defualt title", required: true },
    description: { type: String, default: "Default description" },
    key: { type: String, required: true },
    path: { type: String, required: true },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPrivate: { type: Boolean, default: false },
    thumbNail: {
      type: String,
      default:
        "https://www.veeforu.com/wp-content/uploads/2023/03/Yellow-Youtube-thumbnail-bg-HD.jpg",
    },
  },
  { timestamps: true }
);

const Video: Model<IVideo> = mongoose.model<IVideo>("Video", videoSchema);
export default Video;
