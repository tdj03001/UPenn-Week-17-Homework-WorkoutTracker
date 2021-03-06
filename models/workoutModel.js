const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  day: { type: Date, default: () => new Date() },
  exercises: [{
    type: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
      required: "Enter excercise name:"
    },
    duration: {
      type: Number,
      trim: true,
      required: "Enter excercise duration:",
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    weight: {
      type: Number,
      trim: true,
      required: "Enter weight amount:",
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    reps: {
      type: Number,
      trim: true,
      required: "Enter number of reps:",
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    sets: {
      type: Number,
      trim: true,
      required: "Enter number of sets:",
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    },
    distance: {
      type: Number,
      trim: true,
      required: "Enter number of reps:",
      validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not an integer value'
      }
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = { "Workout": Workout }