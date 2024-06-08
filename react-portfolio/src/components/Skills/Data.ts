import Html from '/images/icon-html.png'
import Css from '/images/icon-css.png'
import Javatscript from '/images/icon-javatscript.png'
import Sass from '/images/icon-react.png'
import React from '/images/icon-react.png'
import Typescript from '/images/icon-typescript.png'
import Tailwind from '/images/icon-tailwind.png'
import Nextjs from '/images/icon-nextjs.png'
import Nodejs from '/images/icon-nodejs.png'
import Mongodb from '/images/icon-mongodb.png'

type SkillsProps = {
    image: string
    name: string
}

const SkillsInfo: SkillsProps[] = [
    { image: Html, name: 'HTML5' },
    { image: Css, name: 'CSS3' },
    { image: Javatscript, name: 'Javatscript' },
    { image: Sass, name: 'Sass' },
    { image: React, name: 'React.js' },
    { image: Typescript, name: 'Typescript' },
    { image: Tailwind, name: 'Tailwind CSS' },
    { image: Nextjs, name: 'Next.js' },
    { image: Nodejs, name: 'Node.js' },
    { image: Mongodb, name: 'Mongodb' },
]

export {SkillsInfo}

