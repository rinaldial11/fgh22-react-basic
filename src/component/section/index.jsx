import './style.css'

function Section() {
  return (
    <div className="container-section">
        <div className="sectionChild">
            <span className="sectionTag">Be the vanguard of the</span>
            <span className="sectionTag1">Moviegoers</span>
            <div className="sectionGchild">
                <input type="email" placeholder="Type your email" />
                <button>Join now</button>
            </div>
            <span className="sectionTag2">By joining you as Tickitz member,</span>
            <span className="sectionTag2">we will always send you latest update via email .</span>
        </div>
    </div>
  )
}

export default Section