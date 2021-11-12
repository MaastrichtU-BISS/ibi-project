import React, { PureComponent } from 'react'
import { format as d3Format, select as d3Select } from 'd3'

import { getConfig, DEFAULT_PROPS, updateConfig } from './core/config'
import { render, update } from './core/render'
import { CustomSegmentLabelPosition, Transition } from './core/enums'

class ReactSpeedometer extends PureComponent {
  static displayName = 'ReactSpeedometer'

  constructor(props) {
    super(props)

    // list of d3 refs to share within the components
    this.d3_refs = {
      pointer: false,
      current_value_text: false,
    }
  }

  componentDidMount() {
    // render the gauge here
    this.renderGauge()
  }

  render = () => {
    return <div ref={ref => (this.gaugeDiv = ref)} />
  }

  componentDidUpdate() {
    // on update, check if 'forceRender' option is present;
    if (this.props.forceRender) {
      this.renderGauge()
    } else {
      // let us just animate the value of the speedometer
      this.updateReadings()
    }
  }

  renderGauge() {
    this.config = getConfig({
      PROPS: this.props,
      parentWidth: this.gaugeDiv.parentNode.clientWidth,
      parentHeight: this.gaugeDiv.parentNode.clientHeight,
    })

    // remove existing gauge (if any)
    d3Select(this.gaugeDiv).select('svg').remove()

    this.d3_refs = render({
      container: this.gaugeDiv,
      config: this.config,
    })

    update({
      d3_refs: this.d3_refs,
      newValue: this.props.value,
      config: this.config,
    })
  }

  updateReadings() {
    this.config = updateConfig(this.config, {
      labelFormat: d3Format(this.props.valueFormat || ''),
      currentValueText: this.props.currentValueText || '${value}',
    })

    // updates the readings of the gauge with the current prop value
    // animates between old prop value and current prop value
    update({
      d3_refs: this.d3_refs,
      newValue: this.props.value || 0,
      config: this.config,
    })
  }
}

// define the proptypes
// make all the props and 'required' and provide sensible default in the 'defaultProps'


// define the default proptypes
ReactSpeedometer.defaultProps = DEFAULT_PROPS

export default ReactSpeedometer

// enums
export { CustomSegmentLabelPosition, Transition }
