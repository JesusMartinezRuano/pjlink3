// ./express-server/controllers/proyector.server.controller.js
import mongoose from 'mongoose';

//import models
import Proyector from '../models/proyector.server.model';

export const getProyectores = (req,res) => {
  Proyector.find().exec((err,proyectores) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Proyectores fetched successfully',proyectores});
  });
}

export const addProyector = (req,res) => {
  console.log(req.body);
  const newProyector = new Proyector(req.body);
  newProyector.save((err,proyector) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Proyector added successfully',proyector});
  })
}

export const updateProyector = (req,res) => {
  Proyector.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,proyector) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(proyector);
    return res.json({'success':true,'message':'Updated successfully',proyector});
  })
}

export const getProyector = (req,res) => {
  Proyector.find({_id:req.params.id}).exec((err,proyector) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(proyector.length){
      return res.json({'success':true,'message':'Proyector fetched by id successfully',proyector});
    }
    else{
      return res.json({'success':false,'message':'Proyector with the given id not found'});
    }
  })
}

export const deleteProyector = (req,res) => {
  Proyector.findByIdAndRemove(req.params.id, (err,proyector) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':proyector.ubiAlias+' deleted successfully'});
  })
}
