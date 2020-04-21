// src/Chart/Chart.jsx
import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'

import data from '../../data/BubbleChart'
import Bubbles from './Bubbles/Bubbles'
export default class Bar extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
  }



    render() {
        const margins = { top: 50, right: 20, bottom: 100, left: 60 };
        const svgDimensions = { width: 800, height: 500 };

        return (

            <svg height={svgDimensions.height} width={svgDimensions.width}>
                <Bubbles data={data} svgDimensions={svgDimensions}></Bubbles>
            </svg>
        )
    }
}