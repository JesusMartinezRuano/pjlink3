import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  ubiAlias: String,
  ubiInvent: String
});

export default mongoose.model('Proyectore', Schema);  //mongoose añade automaticamente una "s" al final nombre de coleccion proyectores
