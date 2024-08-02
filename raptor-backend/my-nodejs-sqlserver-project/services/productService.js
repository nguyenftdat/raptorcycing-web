const { sql, poolPromise } = require('../db/db');
const Product = require('../models/productModel');

class ProductService {

  async getAllProducts() {
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .execute('GetAllBikeSpecs');
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }

  async getProductById(product_id) {
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .input('product_id', sql.Int, product_id)
        .execute('GetBikeById');
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }

  async getProductsFilter(sort_by, category_id, min_price, color, max_price) {
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .input('category_id', sql.Int, category_id)
        .input('min_price', sql.Decimal, min_price)
        .input('color', sql.NVarChar, color)
        .input('max_price', sql.Decimal, max_price)
        .execute('GetBikeSpecFilter');
      result.recordset.sort((a, b) => {
        switch (sort_by) {
          case '2':
            return a.price - b.price;
          case '3':
            return b.price - a.price;
          case '4':
            return a.product_name.localeCompare(b.product_name);
          case '5':
            return b.product_name.localeCompare(a.product_name);
        }
      });
      return result.recordset;
    } catch (err) {
      throw err;
    }
  }

  async addProduct(productData) {
    try {
      const pool = await poolPromise;
      const request = await pool.request()
        .input('ref_code', sql.VarChar(50), productData.ref_code)
        .input('color', sql.VarChar(50), productData.color)
        .input('weight_kg', sql.Decimal(5, 2), productData.weight_kg)
        .input('drivetrain', sql.VarChar(100), productData.drivetrain)
        .input('frame', sql.VarChar(100), productData.frame)
        .input('fork', sql.VarChar(100), productData.fork)
        .input('derailleur_rear', sql.VarChar(100), productData.derailleur_rear)
        .input('derailleur_front', sql.VarChar(100), productData.derailleur_front)
        .input('shifter', sql.VarChar(100), productData.shifter)
        .input('crankset', sql.VarChar(100), productData.crankset)
        .input('cassette', sql.VarChar(100), productData.cassette)
        .input('chain', sql.VarChar(100), productData.chain)
        .input('brakes', sql.VarChar(100), productData.brakes)
        .input('disc', sql.VarChar(100), productData.disc)
        .input('wheel_front', sql.VarChar(100), productData.wheel_front)
        .input('wheel_rear', sql.VarChar(100), productData.wheel_rear)
        .input('tire_front', sql.VarChar(100), productData.tire_front)
        .input('tire_rear', sql.VarChar(100), productData.tire_rear)
        .input('grip', sql.VarChar(100), productData.grip)
        .input('handlebar', sql.VarChar(100), productData.handlebar)
        .input('stem', sql.VarChar(100), productData.stem)
        .input('headset', sql.VarChar(100), productData.headset)
        .input('saddle', sql.VarChar(100), productData.saddle)
        .input('seatpost', sql.VarChar(100), productData.seatpost)
        .input('description_txt', sql.Text, productData.description_txt)
        .execute('AddBikeSpec');
    } catch (err) {
      throw err;
    }
  }

  async updateProduct(productData) {
    try {
      const pool = await poolPromise;
      const request = await pool.request()
        .input('product_id', sql.Int, productData.product_id)
        .input('ref_code', sql.VarChar(50), productData.ref_code)
        .input('color', sql.VarChar(50), productData.color)
        .input('weight_kg', sql.Decimal(5, 2), productData.weight_kg)
        .input('drivetrain', sql.VarChar(100), productData.drivetrain)
        .input('frame', sql.VarChar(100), productData.frame)
        .input('fork', sql.VarChar(100), productData.fork)
        .input('derailleur_rear', sql.VarChar(100), productData.derailleur_rear)
        .input('derailleur_front', sql.VarChar(100), productData.derailleur_front)
        .input('shifter', sql.VarChar(100), productData.shifter)
        .input('crankset', sql.VarChar(100), productData.crankset)
        .input('cassette', sql.VarChar(100), productData.cassette)
        .input('chain', sql.VarChar(100), productData.chain)
        .input('brakes', sql.VarChar(100), productData.brakes)
        .input('disc', sql.VarChar(100), productData.disc)
        .input('wheel_front', sql.VarChar(100), productData.wheel_front)
        .input('wheel_rear', sql.VarChar(100), productData.wheel_rear)
        .input('tire_front', sql.VarChar(100), productData.tire_front)
        .input('tire_rear', sql.VarChar(100), productData.tire_rear)
        .input('grip', sql.VarChar(100), productData.grip)
        .input('handlebar', sql.VarChar(100), productData.handlebar)
        .input('stem', sql.VarChar(100), productData.stem)
        .input('headset', sql.VarChar(100), productData.headset)
        .input('saddle', sql.VarChar(100), productData.saddle)
        .input('seatpost', sql.VarChar(100), productData.seatpost)
        .input('description_txt', sql.Text, productData.description_txt)
        .execute('UpdateBikeSpec');
    } catch (err) {
      throw err;
    }
  }

  async deleteProductById(product_id) {
    try {
      const pool = await poolPromise;
      const result = await pool.request()
        .input('product_id', sql.Int, product_id)
        .execute('DeleteBikeSpec');
    } catch (err) {
      throw err;
    }
  }

  async showProduct() {
    var allBikes = await getProductsFilter(1, null, null, 4000);
    // Kiểm tra nếu có dữ liệu
    if (allBikes && allBikes.length > 0) {
      // Vòng lặp for để hiển thị từng đối tượng BikeSpec
      for (let i = 0; i < allBikes.length; i++) {
        console.log(`Product ID: ${allBikes[i].product_id}`);
        console.log(`Color: ${allBikes[i].color}`);
        console.log(`Categories: ${allBikes[i].categories}`);
        // console.log(`Ref Code: ${allBikes[i].ref_code}`);
        // console.log(`Weight (kg): ${allBikes[i].weight_kg}`);
        // console.log(`Drivetrain: ${allBikes[i].drivetrain}`);
        // console.log(`Frame: ${allBikes[i].frame}`);
        // console.log(`Fork: ${allBikes[i].fork}`);
        // console.log(`Rear Derailleur: ${allBikes[i].derailleur_rear}`);
        // console.log(`Front Derailleur: ${allBikes[i].derailleur_front}`);
        // console.log(`Shifter: ${allBikes[i].shifter}`);
        // console.log(`Crankset: ${allBikes[i].crankset}`);
        // console.log(`Cassette: ${allBikes[i].cassette}`);
        // console.log(`Chain: ${allBikes[i].chain}`);
        // console.log(`Brakes: ${allBikes[i].brakes}`);
        // console.log(`Disc: ${allBikes[i].disc}`);
        // console.log(`Front Wheel: ${allBikes[i].wheel_front}`);
        // console.log(`Rear Wheel: ${allBikes[i].wheel_rear}`);
        // console.log(`Front Tire: ${allBikes[i].tire_front}`);
        // console.log(`Rear Tire: ${allBikes[i].tire_rear}`);
        // console.log(`Grip: ${allBikes[i].grip}`);
        // console.log(`Handlebar: ${allBikes[i].handlebar}`);
        // console.log(`Stem: ${allBikes[i].stem}`);
        // console.log(`Headset: ${allBikes[i].headset}`);
        // console.log(`Saddle: ${allBikes[i].saddle}`);
        // console.log(`Seatpost: ${allBikes[i].seatpost}`);
        // console.log(`Description: ${allBikes[i].description_txt}`);
        console.log('-----------------------------');
      }
    } else {
      console.log('No bike specs found.');
    }
  }

}

module.exports = new ProductService();
