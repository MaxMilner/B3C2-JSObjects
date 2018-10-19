const campaign = {
  DennisNedry: {
    district: {
      number:  "420th" 
    },
    platform: [
      {  
      taxes: "Taxation Is Theft",
      jobs: "Kill all dinosaurs",
      infrastructure: "None",
      healthcare: "What?",
      crime: "It's too damn high!",
      },
    ],
    url: {
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    eventCalendar: {
      commemoration: 6-11-93
      },
    volunteer: [
      {
      name: "Alfonso Miranda",
      address: "Opry Mills",
      email: "imthefonze@aol.com",
      phone: "Samsung"
      },
      {
      name: "Justina Vickers",
      address: "LaVergne",
      email: "eyeballhurts@hotmail.com",
      phone: "iPhone"
      },
  ],
    biography: [
      {
      fullName: "Denis Nedry",
      birthCity: "New York",
      birthState: "New York",
      birthDate: 1955,
      deathDate: 1993,
      age: 38
      },
    ],
    imageGallery: [
      {
      headshot: "https://tse2.mm.bing.net/th?id=OIP.9uOk2ZM75SiH6r1llRuxHAHaHD&pid=Api",
      constituents: "http://img.izismile.com/img/img6/20130614/640/the_creepy_things_that_most_likely_scared_you_as_a_child_o0B1r_640_08.jpg"
      }
    ],
    missionStatement: 
    {
      statement: "Dodgson, Dodgson! We've got Dodgson here! See? Nobody cares."
    }
  }
}

console.log()

function changeImage() {
  campaign.DennisNedry.imageGallery[0].headshot = "https://i.amz.mshcdn.com/YcN5-HFJzniiRc13Yi7BMcm6n3s=/950x534/filters:quality(90)/2014%2F09%2F24%2F5e%2Fdennisnedry.710c0.jpg"
  console.log(campaign.DennisNedry.imageGallery[0].headshot)
}

function changeBiography () {
  campaign.DennisNedry.biography.deathDate = 1990
  console.log(campaign.DennisNedry.biography.deathDate)
}

function changePlatform () {
  campaign.DennisNedry.platform.infrastructure = "Fix that sign"
  console.log(campaign.DennisNedry.platform.infrastructure)
}

changeImage()
changeBiography()
changePlatform()