import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import Profile from '../components/Profile/Profile'
import ProfileJapanese from '../components/Profile/ProfileJapanese'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const getProfileImage = graphql`
  query profileImage {
    profileImage: file(relativePath: { eq: "profile_image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ProfilePage = ({ data }) => {
  const { profileImage } = useStaticQuery(getProfileImage)

  const [language, setLanguage] = React.useState('English')

  const handleChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Layout>
      <FormControl
        style={{
          width: 120,
          alignSelf: 'flex-end',
          marginRight: 50,
          marginTop: 80,
        }}
      >
        <InputLabel>Language</InputLabel>
        <Select value={language} onChange={handleChange}>
          <MenuItem value={'English'}>English</MenuItem>
          <MenuItem value={'Japanese'}>Japanese</MenuItem>
        </Select>
      </FormControl>
      {language === 'English' && <Profile profileImage={profileImage} />}
      {language === 'Japanese' && (
        <ProfileJapanese profileImage={profileImage} />
      )}
    </Layout>
  )
}

export default ProfilePage
