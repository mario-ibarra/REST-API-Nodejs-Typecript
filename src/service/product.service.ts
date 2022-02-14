import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { IProductInput, ProductDocument } from "../models/product.model";

 
 export async function createProduct(
     input: IProductInput) {
     return ProductModel.create(input)
 }
 
 export async function findProduct(
     query: FilterQuery<ProductDocument>,
     options: QueryOptions = { lean: true }
 ){
     return ProductModel.findOne(query, {}, options );
 }

 export async function findAndUpdateProduct(
     query: FilterQuery<ProductDocument>,
     update: UpdateQuery<ProductDocument>,
     options: QueryOptions
 ) {
     return ProductModel.findOneAndUpdate(query, update, options);
 }

 export async function deleteProduct(
     query: FilterQuery<ProductDocument>
 ) {  
    return ProductModel.deleteOne(query)
}