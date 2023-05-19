

function addAPIData(data){
    const personalInfo = [
        {
            top: "full Name",
            bottom: `${data.profile.lastName} ${data.profile.firstName}`,
        },
        {
            top: "Phone Number",
            bottom: data.phoneNumber
        },
        {
            top: "Email Address",
            bottom: data.email 
        },
        {
            top: "BVN",
            bottom: data.profile.bvn
        },
        {
            top: "currency",
            bottom: data.profile.currency
        }
    ]
    
    const education = [
        {
            top: "level of education",
            bottom: data.education.level
        },
        {
            top: "Employment status",
            bottom: data.education.employmentStatus
        },
        {
            top: "sector of employment",
            bottom: data.education.sector
        },
        {
            top: "Duration of employment",
            bottom: data.education.duration
        },
        {
            top: "office email",
            bottom: data.education.officeEmail
        },
        {
            top: "Monthly income",
            bottom: `₦${data.education.monthlyIncome[0]} - ₦${data.education.monthlyIncome[0]}`
        },
        {
            top: "loan repayment",
            bottom: data.education.loanRepayment
        }
    ]
    
    const socials = [
        {
            top: "Twitter",
            bottom: data.socials.twitter
        },
        {
            top: "Facebook",
            bottom: data.socials.facebook

        },
        {
            top: "Instagram",
            bottom: data.socials.instagram
        }
    ]
    
    const guarantor = [
        {
            top: "full Name",
            bottom: `${data.guarantor.lastName} ${data.guarantor.firstName} `
        },
        {
            top: "Phone Number",
            bottom: data.guarantor.phoneNumber
        },
        {
            top: "Address",
            bottom: data.guarantor.address
        },
        {
            top: "Gender",
            bottom: data.guarantor.gender
        }
    ]

    return {
        personalInfo,
        education,
        socials,
        guarantor
    }

}

export default addAPIData;
