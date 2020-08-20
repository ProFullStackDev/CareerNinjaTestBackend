const mongoose = require ('mongoose');
const connectionURL =
  process.env.MONGODB_URL ||
  'mongodb+srv://Surya:surya007@cluster0-bwfkc.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect (connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  autoIndex: true,
});
