class BikeSpec {
  constructor(product_id, ref_code, color, weight_kg, drivetrain, frame, fork, derailleur_rear, 
    derailleur_front, shifter, crankset, cassette, chain, brakes, disc, wheel_front, wheel_rear, 
    tire_front, tire_rear, grip, handlebar, stem, headset, saddle, seatpost, description_txt) {
    this.product_id = product_id;
    this.ref_code = ref_code;
    this.color = color;
    this.weight_kg = weight_kg;
    this.drivetrain = drivetrain;
    this.frame = frame;
    this.fork = fork;
    this.derailleur_rear = derailleur_rear;
    this.derailleur_front = derailleur_front;
    this.shifter = shifter;
    this.crankset = crankset;
    this.cassette = cassette;
    this.chain = chain;
    this.brakes = brakes;
    this.disc = disc;
    this.wheel_front = wheel_front;
    this.wheel_rear = wheel_rear;
    this.tire_front = tire_front;
    this.tire_rear = tire_rear;
    this.grip = grip;
    this.handlebar = handlebar;
    this.stem = stem;
    this.headset = headset;
    this.saddle = saddle;
    this.seatpost = seatpost;
    this.description_txt = description_txt;
  }
}
module.exports = BikeSpec;
