/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

import SliderImg from '../../store/images/action'
import {connect} from 'react-redux'

/**
 * @function Slider
 */
const Slider = ({SliderImg,propSlide}) => {
  const getWidth = () => window.innerWidth
  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={propSlide.translate}
        transition={propSlide.transition}
        width={getWidth() *propSlide.imagenes.length }
      >
        {propSlide.imagenes.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={()=>SliderImg("PREV_SLIDE")} />
      <Arrow direction="right" handleClick={()=>SliderImg("NEXT_SLIDE")} />

      <Dots slides={propSlide.imagenes} activeIndex={propSlide.activeIndex} />
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 80vh;
  width: 83vw;
  margin: 0 auto;
  overflow: hidden;
`
const mapStateToProps = state => ({
  propSlide: state.sliderReducer.Slider
})

export default connect(mapStateToProps, {SliderImg})(Slider)