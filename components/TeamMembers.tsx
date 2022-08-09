import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const TeamMembers = () => {
  const {t} = useTranslation('common')

  const teamWork = [
    {
      id: 1,
      character: '/images/teams/maz.png',
      possion: t('charactorPossion1'),
      jobTitle: t('characterJob1'),
      name: t('characterName1'),
      Links: [
        {
          id: 1,
          socialMedia: 'Twitter',
          link: 'https://twitter.com/AmazenDessouky',
          socialIcon: FaTwitter,
        },
        {
          id: 2,
          socialMedia: 'Linkedin',
          link: 'https://www.linkedin.com/in/ahmed-mazen-31b237176/',
          socialIcon: FaLinkedin,
        },
      ],
    },
    {
      id: 2,
      character: '/images/teams/bill.png',
      possion: t('charactorPossion2'),
      jobTitle: t('characterJob2'),
      name: t('characterName2'),
      Links: [
        {
          id: 1,
          socialMedia: 'Linkedin',
          link: 'https://www.linkedin.com/in/bill-salah-b89002201/',
          socialIcon: FaLinkedin,
        },
      ],
    },
    {
      id: 3,
      character: '/images/teams/asad.png',
      possion: t('advisorPossion2'),
      jobTitle: t('advisorTitle2'),
      name: t('advisor2'),
      Links: [
        {
          id: 1,
          socialMedia: 'Linkedin',
          link: 'https://www.linkedin.com/in/asadzeeshan/',
          socialIcon: FaLinkedin,
        },
      ],
    },
    {
      id: 4,
      character: '/images/teams/kate.png',
      possion: t('charactorPossion3'),
      jobTitle: t('characterJob3'),
      name: t('characterName3'),
      Links: [
        {
          id: 1,
          socialMedia: 'Twitter',
          link: 'https://twitter.com/soy__Catalina',
          socialIcon: FaTwitter,
        },
        {
          id: 2,
          socialMedia: 'Linkedin',
          link: 'https://www.linkedin.com/in/katerina-stepanova-3bb20a153/',
          socialIcon: FaLinkedin,
        },
      ],
    },
    {
      id: 5,
      character: '/images/teams/nana.png',
      possion: t('advisorPossion1'),
      jobTitle: t('advisorTitle1'),
      name: t('advisor1'),
      Links: [
        {
          id: 1,
          socialMedia: 'Linkedin',
          link: 'https://www.linkedin.com/in/nariman-salah-612316229/',
          socialIcon: FaLinkedin,
        },
      ],
    },
    {
      id: 6,
      character: '/images/teams/daved.png',
      possion: t('charactorPossion5'),
      jobTitle: t('characterJob5'),
      name: t('characterName5'),
      Links: [
        {
          id: 1,
          socialMedia: 'Twitter',
          link: 'https://twitter.com/David90079007',
          socialIcon: FaTwitter,
        },
        {
          id: 2,
          socialMedia: 'Linkedin',
          link: 'https://www.linkedin.com/in/david-okorokoff-1362071a3/',
          socialIcon: FaLinkedin,
        },
      ],
    },
    {
      id: 7,
      character: '/images/teams/moamen.png',
      possion: t('charactorPossion6'),
      jobTitle: t('characterJob6'),
      name: t('characterName6'),
      Links: [
        {
          id: 1,
          socialMedia: 'Facebook',
          link: 'https://www.facebook.com/Momen.Medhat.Official/',
          socialIcon: FaFacebookSquare,
        },
        {
          id: 2,
          socialMedia: 'Instagram',
          link: 'https://www.instagram.com/momen.medhat.official/',
          socialIcon: FaInstagram,
        },
        {
          id: 3,
          socialMedia: 'Youtube',
          link: 'https://www.youtube.com/Momen_Medhat',
          socialIcon: FaYoutube,
        },
      ],
    },
    {
      id: 8,
      character: '/images/teams/ahmed.png',
      possion: t('charactorPossion7'),
      jobTitle: t('characterJob7'),
      name: t('characterName7'),
      Links: [
        {
          id: 1,
          socialMedia: 'Linkedin',
          link: 'https://www.linkedin.com/in/ahmed-ragab-67b203174',
          socialIcon: FaLinkedin,
        },
      ],
    },
  ]
  return (
    <div>
      <div className="container mx-auto space-y-8">
        <div className="space-y-8">
          <div className="flex flex-row flex-wrap justify-center text-center">
            {teamWork.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="m-8 rounded-2xl px-4 py-6 nm-flat-slate-700-lg">
                  <Image
                    src={obj.character}
                    alt={obj.name}
                    width={230}
                    height={280}
                    priority
                  />
                  <div className="text-center text-sm">
                    <h2 className=" font-aclonica text-lg">{obj.name}</h2>
                    <h1>{obj.possion}</h1>
                    <h3>{obj.jobTitle}</h3>
                    <div className="flex flex-row flex-wrap justify-evenly">
                      {obj.Links.map((link) => {
                        return (
                          <Link href={link.link} key={link.id}>
                            <a
                              className="mt-3 flex h-14 w-14 flex-row items-center justify-center rounded-xl nm-inset-slate-700-xl"
                              target={'_blank'}>
                              <link.socialIcon className="align-middle text-3xl text-yellow-500" />
                            </a>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMembers
