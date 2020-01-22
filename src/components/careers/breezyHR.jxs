import React from 'react'

class BreezyHR extends React.Component {
  componentDidMount() {
    // 1. Create <script>Tag</script>
    const script = document.createElement('script')
    // 2. <script async>
    script.async = true
    // 3. <script src="src">
    script.src =
      'https://gray-tier-technologies.breezy.hr/embed/js?bzsrc=jswidget&include_filters=true&link_external=true&no_pos_msg=true'
    // 4. <script id="id">
    script.id = 'BrzyHr_app'
    // 5. Insert script by getElementID
    document.getElementById('BrzyHr_app').appendChild(script)
  }
  render() {
    return <div id="BrzyHr_app" />
  }
}

export default BreezyHR
