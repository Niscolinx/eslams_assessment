import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import User from '../../models/User'
import Withdrawal from '../../models/withdrawal'
import { transporter } from '../../utils/emailTransport'

export default async function storeGeneratedCode(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await dbConnect()

        const { postWithdrawalAction, _id, username, email } = req.body

        const findWithdrawal = await Withdrawal.findOne({ _id })

        if (!findWithdrawal) {
            return res.status(404).json('Withdrawal not found')
        }

        let userID = ''

        const user = await User.findOne({ username })

        if (!user) {
            return res.status(404).json('User not found')
        }
        userID = user._id.toString().slice(7, -1)

        if (postWithdrawalAction === 'Approve') {
            findWithdrawal.status = 'approved'
        } else if (postWithdrawalAction === 'Decline') {
            findWithdrawal.status = 'declined'
            user.portfolio += findWithdrawal.amount
            await user.save()
        }

        const updatedWithdrawal = await findWithdrawal.save()
        if (updatedWithdrawal) {
            const traceId = _id.slice(8, 14)

            console.log('user id', { userID })

            const emailTemplate = `<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>1960Token Account Payout</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet">
            <link rel="stylesheet" href="/css/main.css">
                

                <style>
                body {
  font-family: "Montserrat", sans-serif;
  color: #f3f2f2;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  display: grid;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #1a1a2d;
  color: #f3f2f2;
}

.header__logo {
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
}
.header__text {
  text-align: center;
}
.header__text--account {
  font-size: 1.2rem;
}
.header__text--username {
    text-transform: capitalize;
    font-size: 1.2rem;
        }
.header__text--bold {
  font-weight: bold;
}

.main {
  margin: 2rem 0;
  text-align: center;
}

.main__text {
    font-size: 1.2rem;
}
.main__bold {
  font-weight: bold;
}
.main p a:link,
.main p a:visited {
  color: #fdba74;
  text-decoration: none;
}

.footer {
  border-top: 1px solid rgba(253, 187, 116, 0.4509803922);
  border-bottom: 1px solid rgba(253, 187, 116, 0.4509803922);
  padding: 0.5rem 0;
  text-align: center;
}
.footer__link {
  text-align: center;
  display: block;
}
.footer__link a:link {
  text-decoration: none;
}
.footer__link a:link:not(:last-child) {
  margin-right: 1rem;
}
.footer__link a:link img {
  -o-object-fit: cover;
     object-fit: cover;
}
.footer__legal {
  margin-top: 1rem;
  width: 100%;
  max-width: 25rem;
  text-align: center;
  margin: 0 auto;
}
.footer__legal--links {
  width: 100%;
}
.footer__legal--links a:link,
.footer__legal--links a:visited {
  color: #fdba74;
  text-decoration: none;
}
.footer__legal--links span {
  margin: 0 1rem;
}
.footer__legal--copyright {
  font-size: 0.8rem;
}/*# sourceMappingURL=main.css.map */
                </style>
            </head>

            <body>

	<div class="container" style="background-color:#1a1a2d !important; background: #1a1a2d !important">


		<div class="header">

             <img src="https://i.ibb.co/0YRyvTC/Photo-1660459262703.png" alt="Photo-1660459262703" border="0" class="header__logo">

			<div class="header__text">
				<h3 class="header__text--username" style="color:white;">Hi, ${username}!</h3>
				<p class="header__text--account" style="color:white;">1960Token Account ID <span class="header__text--bold">${userID}</span></p>
				<h1>Your Withdrawal is ${
                    findWithdrawal.status === 'approved'
                        ? 'Successful'
                        : 'Declined'
                }</h1>
			</div>
		</div>

		<div class="main">
            
        ${
            findWithdrawal.status === 'approved'
                ? `<p class='main__text'>We have successfully processed your Withdrawal request of <span class="main__bold">$${findWithdrawal.amount}</span> for trace ID <span class="main__bold">${traceId}</span></p>`
                : `<p class='main__text'>Sorry, your withdrawal has been declined for trace ID <span class="main__bold">${traceId}</span></p>`
        }
			
			<p style="color:white;">If you have any questions please <a href="https://1960token.com/contact-us">contact us</a></p>
		</div>

		<div class="footer">
			<div class="footer__link">


				<a href="https://www.facebook.com/1960token/">

					<img src="https://i.ibb.co/rvBK8cW/Photo-1660460674202.png" width="25px" height="25px" alt="Photo-1660460674202" border="0">
				</a>
				<a href="https://t.me/Official1960Token">

				<img src="https://i.ibb.co/DG90kG4/Photo-1660460730621.png" width="25px" height="25px" alt="Photo-1660460730621" border="0" style="margin: 0 .5rem">
				</a>
				<a href="https://youtube.com/channel/UC7wWL-pB3MJ2DZzAUGNnMnw">

				<img src="https://i.ibb.co/xz2z3CH/Photo-1660460810214.png" width="25px" height="25px" alt="Photo-1660460810214" border="0">
				</a>
				
			</div>
			<div class='footer__legal' style="margin-top: 1rem;">
				<div class="footer__legal--links">

					<a href='https://1960token.com/terms-and-conditions' style="color:white;">
						Terms and Conditions
					</a> <span></span>
					<a href='https://1960token.com/privacy-policy' style="color:white;">
						Privacy Policy
					</a>
				</div>
				<p class="footer__legal--copyright" style="color:white;">&copy; 1960Token. All rights reserved</p>
            </div>
		</div>

	</div>


</body>

</html>`

            const mail = {
                from: 'admin@1960token.com',
                to: email,
                subject: `Account Payout - 1960Token - TraceID: ${traceId}`,
                html: emailTemplate,
            }

            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    console.log({ err })
                    res.json({
                        status: 'fail',
                    })
                } else {
                    console.log('email sent', data)
                    res.json({
                        status: 'success',
                    })
                }
            })
        } else {
            console.log('not updatedWithdrawal')
        }

        res.status(200).json(updatedWithdrawal)
    } catch (err) {
        res.status(400).json('error')
    }
}
