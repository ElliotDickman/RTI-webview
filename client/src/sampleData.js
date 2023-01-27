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
  'This is the description for the fanciest of fabrics',
  'The Drexel Collection',
  'Marcel Duchamp',
  'Bill Gates'
);
