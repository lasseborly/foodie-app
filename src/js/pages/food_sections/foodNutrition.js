import React, {useState, Component} from "react";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Div } from '../../layouts/layout'
import { Trail, animated, template } from 'react-spring'

class FoodNutrition extends Component {
    state = { toggle: true, items: ['item1', 'item2', 'item3', 'item4', 'item5'] }
    toggle = () => this.setState(state => ({ toggle: !state.toggle }))
    render() {
        const { toggle, items } = this.state
        return (
            <div style={{ backgroundColor: '#247BA0' }}>
                <h2>a</h2>
                {/* <Trail
                    native
                    from={{ opacity: 0, x: -100 }}
                    to={{ opacity: toggle ? 1 : 0.25, x: toggle ? 0 : 100 }}
                    keys={items}>
                    {items.map(item => ({ x, opacity }) => (
                        <animated.div
x                            onClick={this.toggle}
                            style={{ opacity, transform: template`translate3d(${x}%,0,0)` }}
                        />
                    ))}
                </Trail> */}
            </div>
        )
    }
}

export default FoodNutrition