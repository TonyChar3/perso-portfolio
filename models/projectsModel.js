import mongoose from 'mongoose';

const projectImgObj = mongoose.Schema({
    screen_type: {
        type: String
    },
    url: {
        type: String
    }
});

const stackIconObj = mongoose.Schema({
    name: {
        type: String
    },
    url: {
        type: String
    }
});

const projectSchema = mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectUrl: {
        type: String,
        required: true
    },
    imgUrl: {
        type: [projectImgObj],
        default: []
    },
    description: {
        type: String,
        required: true
    },
    stack: {
        type: [stackIconObj],
        default: []
    },
    repoUrl: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema)
export default Project;