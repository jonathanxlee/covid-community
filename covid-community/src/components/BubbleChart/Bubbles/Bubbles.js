import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import { min, max } from 'd3-array'
import { forceSimulation, forceManyBody, forceX, forceY } from 'd3-force'
import { select as d3Select } from 'd3-selection'

export default class Bubbles extends Component {

    render(){
        const data = this.props.data;

        var div = d3Select("svg")
            .selectAll("div")
            .data(data)
            .enter()
            .append("div");

        function ticked(e) { 
            node.attr("cx", function(d) { return d.x; }) 
                .attr("cy", function(d) { return d.y; }); 
        }

        var simulation = forceSimulation(data)
            .force("charge", forceManyBody().strength([-50]))
            .force("x", forceX())
            .force("y", forceY())
            .on("tick", ticked);

        var scaleRadius = scaleLinear()
            .domain([min(data, function(d) { return +d.views; }), 
                    max(data, function(d) { return +d.views; })])
            .range([5,18]);
        
        var node = d3Select("svg")
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr('r', function(d) { return scaleRadius(d.views)})

        node = d3Select("svg")
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr('r', function(d) { return scaleRadius(d.views)})
            .attr('transform', 'translate(' + [this.props.svgDimensions.width / 2, this.props.svgDimensions.height / 2] + ')');
        
        return node;
    }
}