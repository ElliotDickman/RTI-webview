class Artwork {
  constructor(name, desc, collection, artist, donor) {
    this.name = name;
    this.desc = desc;
    this.collection = collection;
    this.artist = artist;
    this.donor = donor;
  }
}

export const sampleWork = new Artwork(
  'Fancy Fabric',
  'The first textile is by American artist Sheila Hicks. Like Larsen, her design is influenced by the structure, form and color of cultures across the globe. This is one of her small scale works Minime. Upon completing her undergraduate degree at Yale University in 1957, Hicks received a Fulbright grant to study ancient Andean weaving in Chile, using the funds to travel across the continent and explore its rich artistic traditions. She has traveled extensively throughout her career: setting up workshops in Mexico, Chile, and South Africa; developing commercially woven fabrics in India and tufted rugs in Morocco. Hicks employs intensely saturated color and the raw materials of textiles—wool, synthetic thread, linen flax—in works that are rigorously constructed by wrapping, piling, and weaving her materials. Hicks changes gauge and angle on warp and weft and the thickness of the yarns she uses, linking in sections to create a tapestry that reflects the cultures she has studied. While at Yale, Hicks studied painting with artist and designer Josef Albers, whose book The Interaction of Color heralded new approaches to the study of color, and left a lasting impact on Hicks’s work.Reflectance Transformation Imaging (RTI) is a new imaging technique that creates hyper-realistic digital twins of surfaces that can be interactively observed by the viewer. The technique involves the capture of multiple images with the subject and camera position fixed and the angle of incidence of light is varying between the images. Synthesis of the multiple images into a single file derives all ',
  'The Drexel Collection',
  'Marcel Duchamp',
  'Bill Gates'
);
