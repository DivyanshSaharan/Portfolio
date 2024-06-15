import React from 'react'
// import { ReactComponent as GithubIcon } from '../../assets/github-alt.svg';
// import { ReactComponent as GithubIcon } from '../../assets/github-alt.svg';
import GithubIcon from '../../assets/github-alt.svg';
import LeetCodeIcon from '../../assets/leetcode.svg';
const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/DivyanshSaharan" className="home__social-icon" target="_blank">
          <img src={GithubIcon} alt="GitHub Icon" style={{height:'20px',width:"20px"}}/><br></br>
      {/* Other content */}
        </a>
        <a href="https://leetcode.com/u/divyansh1_1/" className="home__social-icon" target="_blank">
          <img src={LeetCodeIcon} alt="LeetCode Icon" style={{height:'20px',width:"20px"}}/>
        </a>
    </div>
  )
}

export default Social