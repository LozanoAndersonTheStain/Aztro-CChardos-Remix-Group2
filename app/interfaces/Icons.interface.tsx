export const Icons = {
    Destination: () => (
      <img 
        src="https://res.cloudinary.com/dy6jglszo/image/upload/v1742270604/Amadeus/cfd24cbbf6ea2d41ebd0146960c0e644_nvkdim.png"
        alt="Destination icon"
        className="w-[5rem] h-[5rem]"
      />
    ),
  
    Weather: () => (
      <img 
        src="https://res.cloudinary.com/dy6jglszo/image/upload/v1742270604/Amadeus/b8bc62586b85a9f626cec4dc0af483cf_getr3f.png"
        alt="Weather icon"
        className="w-[5rem] h-[3.8rem]"
      />
    ),
    Activities: () => (
      <img 
        src="https://res.cloudinary.com/dy6jglszo/image/upload/v1742270604/Amadeus/7de5c2fbf14f9b7eda2662eb6851df93_xluvhc.png"
        alt="Activities icon"
        className="w-[4.1rem] h-[3.6rem]"
      />
    ),
    Accommodation: () => (
      <img 
        src="https://res.cloudinary.com/dy6jglszo/image/upload/v1742270604/Amadeus/a347ea829d4baf40304672f95a23715b_a2dob2.png"
        alt="Accommodation icon"
        className="w-[3rem] h-[3rem]"
      />
    ),
    Duration: () => (
      <img 
        src="https://res.cloudinary.com/dy6jglszo/image/upload/v1742270604/Amadeus/311bbaef6c70e93ef01c790179dc3b6b_kcxjam.png"
        alt="Duration icon"
        className="w-[3rem] h-[3rem]"
      />
    ),
    Age: () => (
      <img 
        src="https://res.cloudinary.com/dy6jglszo/image/upload/v1742270604/Amadeus/4da516973f6e49829bae2092b630cd56_dwtxws.png"
        alt="Age icon"
        className="w-[4rem] h-[4rem]"
      />
    ),
  };
  
  export const getQuestionIcon = (questionId: number) => {
    switch (questionId) {
      case 1: return Icons.Destination;
      case 2: return Icons.Weather;
      case 3: return Icons.Activities;
      case 4: return Icons.Accommodation;
      case 5: return Icons.Duration;
      case 6: return Icons.Age;
      default: return Icons.Destination;
    }
  };