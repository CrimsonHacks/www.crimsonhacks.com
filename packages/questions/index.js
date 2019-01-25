export default {
  basic: [
    {
      name: "email",
      label: "Email",
      required: true,
      type: "email",
      validate: value => {
        let error

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Invalid email address"
        }

        return error
      },
    },
    {
      name: "firstName",
      label: "First name",
      required: true,
      type: "text",
    },
    {
      name: "lastName",
      label: "Last name",
      required: true,
      type: "text",
    },
    {
      name: "phone",
      label: "Phone number",
      required: true,
      type: "text",
      notes: "Just in case we need to get hold of you.",
    },
    {
      name: "school",
      label: "School",
      required: true,
      type: "text",
    },
  ],
  details: [
    {
      name: "birthdate",
      label: "Birthdate (MM/DD/YYYY)",
      required: true,
      type: "text",
      validate: value => {
        const error = "Invalid birthdate"

        const data = value.split("/")

        if (data.length !== 3) return error

        if (
          data[0].length !== 2 ||
          data[1].length !== 2 ||
          data[2].length !== 4
        )
          return error

        data.forEach(str => {
          for (let c in str) {
            if ("0123456789".indexOf(c) !== -1) {
              return error
            }
          }
        })

        const month = parseInt(data[0], 10)
        const date = parseInt(data[1], 10)
        const year = parseInt(data[2], 10)

        if (
          date > 31 ||
          month > 12 ||
          year > new Date().getFullYear() ||
          year < 1900
        )
          return error

        return null
      },
    },
    {
      name: "gender",
      label: "Gender",
      required: true,
      type: "select",
      options: [
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
        {
          value: "notAnswered",
          label: "Prefer not to answer",
        },
        {
          value: "other",
          label: "Other (Please specifiy)",
        },
      ],
    },
    {
      name: "ethnicity",
      label: "What is your race/ethnicity?",
      required: true,
      type: "select",
      options: [
        {
          value: "American Indian or Alaskan Native",
          label: "American Indian or Alaskan Native",
        },
        {
          value: "Asian/Pacific Islander",
          label: "Asian/Pacific Islander",
        },
        {
          value: "Black or African American",
          label: "Black or African American",
        },
        {
          value: "Hispanic",
          label: "Hispanic",
        },
        {
          value: "White/Caucasian",
          label: "White/Caucasian",
        },
        {
          value: "other",
          label: "Multiple ethnicity/Other (Please Specify)",
        },
        {
          value: "notAnswered",
          label: "Prefer not to answer",
        },
      ],
    },
    {
      name: "diet",
      label: "Dietary Restrictions",
      type: "checkbox",
      notes: `<p>If we missed yours, let us know in the  notes at the bottom.</p><p>We'll make sure you get fed :)</p>`,
      options: [
        {
          value: "vegetarian",
          label: "Vegetarian",
        },
        {
          value: "vegan",
          label: "Vegan",
        },
        {
          value: "halal",
          label: "Halal",
        },
        {
          value: "kosher",
          label: "Kosher",
        },
        {
          value: "nut",
          label: "Nut Alergy",
        },
      ],
      defaultValue: {
        vegetarian: false,
        vegan: false,
        halal: false,
        kosher: false,
        nut: false,
      },
    },
    {
      name: "shirtSize",
      label: "What is your shirt size?",
      required: true,
      type: "select",
      notes: "For swag, of course",
      options: [
        {
          value: "S",
          label: "Unisex Small",
        },
        {
          value: "M",
          label: "Unisex Medium",
        },
        {
          value: "L",
          label: "Unisex Large",
        },
        {
          value: "XL",
          label: "Unisex X-Large",
        },
        {
          value: "XXL",
          label: "Unisex XX-Large",
        },
      ],
    },
  ],
  skills: [
    {
      name: "major",
      label: "What is your major?",
      required: true,
      type: "text",
    },
    {
      name: "level",
      label: "What is your most current level of study?",
      required: true,
      type: "select",
      options: [
        {
          value: "bachelors",
          label: "Bachelors",
        },
        {
          value: "masters",
          label: "Master",
        },
        {
          value: "Ph.D",
          label: "Ph.D",
        },
      ],
    },
    {
      name: "graduationYear",
      label: "What is your graduation year?",
      required: true,
      type: "select",
      options: [
        {
          value: 2018,
          label: "2018",
        },
        {
          value: 2019,
          label: "2019",
        },
        {
          value: 2020,
          label: "2020",
        },
        {
          value: 2021,
          label: "2021",
        },
        {
          value: 2022,
          label: "2022",
        },
        {
          value: 2023,
          label: "2023",
        },
        {
          value: 2024,
          label: "2024",
        },
      ],
    },
    {
      name: "github",
      label: "GitHub profile",
      required: true,
      type: "text",
    },
    {
      name: "linkedin",
      label: "LinkedIn profile",
      required: true,
      type: "text",
    },
    {
      name: "resume",
      label: "Resume",
      required: true,
      type: "custom",
      notes:
        'Upload a document outlining any skills or experience you\'d like to share (ex. résumé). For your own privacy, we will only be accepting "pdf" format. Please convert the document before submitting it.',
    },
  ],
  additional: [
    {
      name: "additional",
      label: "Additional notes (optional)",
      required: false,
      type: "textarea",
      notes: "If there's anything else you need to let us know, tell us here!",
    },
  ],
}
