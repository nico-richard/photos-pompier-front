// generates a random vehicle brand
export const generateBrand = () => {
  const brands = [
    'Renault',
    'Peugeot',
    'Citroen',
    'Opel',
    'Fiat',
    'Ford',
    'Mercedes',
    'BMW',
    'Audi',
    'Volkswagen',
    'Toyota',
    'Nissan',
    'Honda',
    'Mazda',
    'Suzuki',
    'Mitsubishi',
    'Subaru',
    'Hyundai',
    'Kia',
    'Tesla',
  ]
  return brands[Math.floor(Math.random() * brands.length)]
}
// generates a random vehicle frame
export const generateFrame = () => {
  const frames = [
    'Abarth',
    'Aixam',
    'Alfa Romeo',
    'Alpine',
    'Aston Martin',
    'Audi',
    'Bentley',
    'BMW',
    'Cadillac',
    'Chevrolet',
    'Chrysler',
    'Citroen',
    'Corvette',
    'Dacia',
    'Daewoo',
    'Daihatsu',
    'Dodge',
    'DS',
    'Ferrari',
    'Fiat',
    'Ford',
    'Honda',
    'Hummer',
    'Hyundai',
    'Infiniti',
    'Isuzu',
    'Iveco',
    'Jaguar',
    'Jeep',
    'Kia',
    'Lada',
    'Lamborghini',
    'Lancia',
    'Land Rover',
    'Lexus',
    'Lotus',
    'Maserati',
    'Mazda',
    'Mercedes',
    'MG',
    'Mini',
    'Mitsubishi',
    'Nissan',
    'Opel',
    'Peugeot',
    'Porsche',
    'Renault',
    'Rover',
    'Saab',
    'Seat',
    'Skoda',
    'Smart',
    'Ssangyong',
    'Subaru',
    'Suzuki',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo',
  ]
  return frames[Math.floor(Math.random() * frames.length)]
}
// generates a random vehicle equipement
export const generateEquipment = () => {
  const equipments = ['Gimaex', 'Rosenbauer', 'Camiva', 'Iveco Magirus', 'Renault Trucks', 'Mercedes-Benz']
  return equipments[Math.floor(Math.random() * equipments.length)]
}
// generates a random owner name
export const generateOwner = () => {
  const owner = [
    'Jean',
    'Pierre',
    'Paul',
    'Jacques',
    'Noémie',
    'Olivier',
    'Philippe',
    'Quentin',
    'Romain',
    'Sébastien',
    'Thibault',
    'Ugo',
    'Vincent',
    'William',
    'Xavier',
    'Yann',
    'Zoé',
  ]
  return owner[Math.floor(Math.random() * owner.length)]
}
// generates a random date
export const generateDate = () => {
  const date = [
    '01/01/2021',
    '01/02/2021',
    '01/03/2021',
    '01/04/2021',
    '01/05/2021',
    '01/06/2021',
    '01/07/2021',
    '01/08/2021',
    '01/09/2021',
    '01/10/2021',
    '01/11/2021',
    '01/12/2021',
  ]
  return date[Math.floor(Math.random() * date.length)]
}
// generates a random license number
export const generateLicenseNumber = () => {
  const licenseNumber = [
    'AA-123-AA',
    'BB-123-BB',
    'CC-123-CC',
    'DD-123-DD',
    'EE-123-EE',
    'FF-123-FF',
    'GG-123-GG',
    'HH-123-HH',
    'II-123-II',
    'SS-123-SS',
    'TT-123-TT',
    'UU-123-UU',
    'VV-123-VV',
    'WW-123-WW',
    'XX-123-XX',
    'YY-123-YY',
    'ZZ-123-ZZ',
  ]
  return licenseNumber[Math.floor(Math.random() * licenseNumber.length)]
}
