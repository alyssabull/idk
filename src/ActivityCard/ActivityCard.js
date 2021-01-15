import { BsPeopleFill } from 'react-icons/bs'
import { MdSchool, MdWork } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { FaHammer, FaBath, FaMusic, FaHiking } from 'react-icons/fa'
import { BiDonateHeart } from 'react-icons/bi'
import { GiCookingPot } from 'react-icons/gi'
import './ActivityCard.scss'

const ActivityCard = (props) => {
  const determineIcon = () => {
    if (props.type === 'education') {
      return <MdSchool size={20} />
    } else if (props.type === 'recreational') {
      return <FaHiking size={20} />
    } else if (props.type === 'social') {
      return <AiFillPhone size={20} />
    } else if (props.type === 'diy') {
      return <FaHammer size={20} />
    } else if (props.type === 'charity') {
      return <BiDonateHeart size={20} />
    } else if (props.type === 'cooking') {
      return <GiCookingPot size={20} />
    } else if (props.type === 'relaxation') {
      return <FaBath size={20} />
    } else if (props.type === 'music') {
      return <FaMusic size={20} />
    } else if (props.type === 'busywork') {
      return <MdWork size={20} />
    }
  }

  return(
    <section className='single-activity-card'>
      <h1 className='title'>{props.activity}</h1>
      <section className='card-details'>
        <p className='detail'>{determineIcon()} &nbsp; {props.type}</p>
        <p className='detail'><BsPeopleFill size={20}/> &nbsp; {props.participants}</p>
      </section>
      <button onClick={() => props.deleteSavedActivity(props.id)} className='remove-button'>REMOVE ACTIVITY</button>
    </section>
  )
}

export default ActivityCard;