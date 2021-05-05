import React  from 'react'
import { Route } from 'react-router-dom'
import EducationsList from './components/EducationsList/EducationsList'
import EducationPost from './components/EducationPost/EducationPost'


const Education = (props) => {
	return (
		<>
			<Route path='/education' exact component={EducationsList} />
			<Route path='/education/:postId' exact component={EducationPost} />
		</>
	)
}

export default Education