module.exports = /* eslint-disable */ [{"name":"CardItem","description":"","props":{"classes":{"type":{"name":"object"},"required":true,"description":""}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { withStyles } from '@material-ui/core/styles';\r\nimport classnames from 'classnames';\r\nimport Card from '@material-ui/core/Card';\r\nimport CardHeader from '@material-ui/core/CardHeader';\r\nimport CardMedia from '@material-ui/core/CardMedia';\r\nimport CardContent from '@material-ui/core/CardContent';\r\nimport CardActions from '@material-ui/core/CardActions';\r\nimport Collapse from '@material-ui/core/Collapse';\r\nimport Avatar from '@material-ui/core/Avatar';\r\nimport IconButton from '@material-ui/core/IconButton';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport red from '@material-ui/core/colors/red';\r\nimport FavoriteIcon from '@material-ui/icons/Favorite';\r\nimport ShareIcon from '@material-ui/icons/Share';\r\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\r\nimport MoreVertIcon from '@material-ui/icons/MoreVert';\r\n\r\nconst styles = theme => ({\r\n  card: {\r\n    maxWidth: 400,\r\n  },\r\n  media: {\r\n    height: 0,\r\n    paddingTop: '56.25%', // 16:9\r\n  },\r\n  actions: {\r\n    display: 'flex',\r\n  },\r\n  expand: {\r\n    transform: 'rotate(0deg)',\r\n    transition: theme.transitions.create('transform', {\r\n      duration: theme.transitions.duration.shortest,\r\n    }),\r\n    marginLeft: 'auto',\r\n    [theme.breakpoints.up('sm')]: {\r\n      marginRight: -8,\r\n    },\r\n  },\r\n  expandOpen: {\r\n    transform: 'rotate(180deg)',\r\n  },\r\n  avatar: {\r\n    backgroundColor: red[500],\r\n  },\r\n});\r\n\r\nclass RecipeReviewCard extends React.Component {\r\n  state = { expanded: false };\r\n\r\n  handleExpandClick = () => {\r\n    this.setState(state => ({ expanded: !state.expanded }));\r\n  };\r\n\r\n  render() {\r\n    const { classes } = this.props;\r\n\r\n    return (\r\n      <Card className={classes.card}>\r\n        <CardHeader\r\n          avatar={\r\n            <Avatar aria-label=\"Recipe\" className={classes.avatar}>\r\n              R\r\n            </Avatar>\r\n          }\r\n          action={\r\n            <IconButton>\r\n              <MoreVertIcon />\r\n            </IconButton>\r\n          }\r\n          title=\"Shrimp and Chorizo Paella\"\r\n          subheader=\"September 14, 2016\"\r\n        />\r\n        <CardMedia\r\n          className={classes.media}\r\n          image=\"https://material-ui.com/static/images/cards/paella.jpg\"\r\n          title=\"Contemplative Reptile\"\r\n        />\r\n        <CardContent>\r\n          <Typography component=\"p\">\r\n            This impressive paella is a perfect party dish and a fun meal to cook together with your\r\n            guests. Add 1 cup of frozen peas along with the mussels, if you like.\r\n          </Typography>\r\n        </CardContent>\r\n        <CardActions className={classes.actions} disableActionSpacing>\r\n          <IconButton aria-label=\"Add to favorites\">\r\n            <FavoriteIcon />\r\n          </IconButton>\r\n          <IconButton aria-label=\"Share\">\r\n            <ShareIcon />\r\n          </IconButton>\r\n          <IconButton\r\n            className={classnames(classes.expand, {\r\n              [classes.expandOpen]: this.state.expanded,\r\n            })}\r\n            onClick={this.handleExpandClick}\r\n            aria-expanded={this.state.expanded}\r\n            aria-label=\"Show more\"\r\n          >\r\n            <ExpandMoreIcon />\r\n          </IconButton>\r\n        </CardActions>\r\n        <Collapse in={this.state.expanded} timeout=\"auto\" unmountOnExit>\r\n          <CardContent>\r\n            <Typography paragraph variant=\"body2\">\r\n              Method:\r\n            </Typography>\r\n            <Typography paragraph>\r\n              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10\r\n              minutes.\r\n            </Typography>\r\n            <Typography paragraph>\r\n              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high\r\n              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly\r\n              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving\r\n              chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,\r\n              salt and pepper, and cook, stirring often until thickened and fragrant, about 10\r\n              minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.\r\n            </Typography>\r\n            <Typography paragraph>\r\n              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook\r\n              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat\r\n              to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and\r\n              cook again without stirring, until mussels have opened and rice is just tender, 5 to 7\r\n              minutes more. (Discard any mussels that don’t open.)\r\n            </Typography>\r\n            <Typography>\r\n              Set aside off of the heat to let rest for 10 minutes, and then serve.\r\n            </Typography>\r\n          </CardContent>\r\n        </Collapse>\r\n      </Card>\r\n    );\r\n  }\r\n}\r\n\r\nRecipeReviewCard.propTypes = {\r\n  classes: PropTypes.object.isRequired,\r\n};\r\n\r\nexport default withStyles(styles)(RecipeReviewCard);\r\n","examples":[{"name":"Example","description":"Custom message","code":"import React from 'react';\r\nimport CardItem from '../../../components/CardItem';\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n  return <CardItem />\r\n}\r\n"}]},{"name":"CardPaper","description":"","code":"import React from \"react\";\r\n\r\nimport \"tabler-react/dist/Tabler.css\";\r\n\r\nimport { Card, Button } from \"tabler-react\";\r\n\r\nclass CardPaper extends React.Component {\r\n  render() {\r\n    return (\r\n      <Card>\r\n        <Card.Header>\r\n          <Card.Title>Card Paper</Card.Title>\r\n        </Card.Header>\r\n        <Card.Body>\r\n          <Button color=\"primary\">A Nice button</Button>\r\n        </Card.Body>\r\n      </Card>\r\n    );\r\n  }\r\n}\r\n\r\nexport default CardPaper;","examples":[{"name":"Example","description":"Custom message","code":"import React from 'react';\r\nimport CardPaper from '../../../components/CardPaper';\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n  return <CardPaper />\r\n}\r\n"}]},{"name":"DiffPreview","description":"","props":{"code":{"type":{"name":"string"},"required":false,"description":"Percent of progress completed","defaultValue":{"value":"'No Bruce Here'","computed":false}}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport 'codemirror/lib/codemirror.css';\r\nimport 'codemirror/theme/material.css';\r\nimport {UnControlled as CodeMirror} from 'react-codemirror2';\r\nrequire('codemirror/mode/xml/xml');\r\nrequire('codemirror/mode/javascript/javascript');\r\n\r\nclass DiffPreview extends React.Component {\r\n\r\n  render() {\r\n    const {code} = this.props;\r\n    return (\r\n      <div style={{border: 'solid 1px lightgray'}}>\r\n        <CodeMirror\r\n            value={code}\r\n            options={{\r\n              mode: 'javascript',\r\n              theme: 'material',\r\n              lineNumbers: true\r\n            }}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nDiffPreview.propTypes = {\r\n  /** Percent of progress completed */\r\n  code: PropTypes.string,\r\n};\r\n\r\nDiffPreview.defaultProps = {\r\n  code: 'No Bruce Here'\r\n};\r\n\r\nexport default DiffPreview;","examples":[{"name":"ExampleAllFeatures","description":"Custom message","code":"import React from 'react';\r\nimport DiffPreview from '../../../components/DiffPreview';\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n  return <DiffPreview code='console.log(\"I love to code stupid shit..\")' />\r\n}\r\n"}]},{"name":"SearchBar","description":"Material design search bar\r\n@see [Search patterns](https://material.io/guidelines/patterns/search.html)","props":{"cancelOnEscape":{"type":{"name":"bool"},"required":false,"description":"Whether to clear search on escape"},"classes":{"type":{"name":"object"},"required":true,"description":"Override or extend the styles applied to the component."},"className":{"type":{"name":"string"},"required":false,"description":"Custom top-level class","defaultValue":{"value":"''","computed":false}},"closeIcon":{"type":{"name":"node"},"required":false,"description":"Override the close icon.","defaultValue":{"value":"<ClearIcon style={{ color: grey[500] }} />","computed":false}},"disabled":{"type":{"name":"bool"},"required":false,"description":"Disables text field.","defaultValue":{"value":"false","computed":false}},"onCancelSearch":{"type":{"name":"func"},"required":false,"description":"Fired when the search is cancelled."},"onChange":{"type":{"name":"func"},"required":false,"description":"Fired when the text value changes."},"onRequestSearch":{"type":{"name":"func"},"required":false,"description":"Fired when the search icon is clicked."},"placeholder":{"type":{"name":"string"},"required":false,"description":"Sets placeholder text for the embedded text field.","defaultValue":{"value":"'Search'","computed":false}},"searchIcon":{"type":{"name":"node"},"required":false,"description":"Override the search icon.","defaultValue":{"value":"<SearchIcon style={{ color: grey[500] }} />","computed":false}},"style":{"type":{"name":"object"},"required":false,"description":"Override the inline-styles of the root element.","defaultValue":{"value":"null","computed":false}},"value":{"type":{"name":"string"},"required":false,"description":"The value of the text field.","defaultValue":{"value":"''","computed":false}}},"code":"import React, { Component } from 'react'\r\nimport PropTypes from 'prop-types'\r\nimport IconButton from '@material-ui/core/IconButton'\r\nimport Input from '@material-ui/core/Input'\r\nimport Paper from '@material-ui/core/Paper'\r\nimport ClearIcon from '@material-ui/icons/Clear'\r\nimport SearchIcon from '@material-ui/icons/Search'\r\nimport { grey } from '@material-ui/core/colors'\r\nimport withStyles from '@material-ui/core/styles/withStyles'\r\nimport classNames from 'classnames'\r\n\r\nconst styles = {\r\n  root: {\r\n    height: 48,\r\n    display: 'flex',\r\n    justifyContent: 'space-between'\r\n  },\r\n  iconButton: {\r\n    opacity: 0.54,\r\n    transform: 'scale(1, 1)',\r\n    transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'\r\n  },\r\n  iconButtonHidden: {\r\n    transform: 'scale(0, 0)',\r\n    '& > $icon': {\r\n      opacity: 0\r\n    }\r\n  },\r\n  iconButtonDisabled: {\r\n    opacity: 0.38\r\n  },\r\n  searchIconButton: {\r\n    marginRight: -48\r\n  },\r\n  icon: {\r\n    opacity: 0.54,\r\n    transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'\r\n  },\r\n  input: {\r\n    width: '100%'\r\n  },\r\n  searchContainer: {\r\n    margin: 'auto 16px',\r\n    width: '100%'\r\n  }\r\n}\r\n\r\n/**\r\n * Material design search bar\r\n * @see [Search patterns](https://material.io/guidelines/patterns/search.html)\r\n */\r\nclass SearchBar extends Component {\r\n  constructor (props) {\r\n    super(props)\r\n    this.state = {\r\n      focus: false,\r\n      value: this.props.value,\r\n      active: false\r\n    }\r\n  }\r\n\r\n  componentWillReceiveProps (nextProps) {\r\n    if (this.props.value !== nextProps.value) {\r\n      this.setState({...this.state, value: nextProps.value})\r\n    }\r\n  }\r\n\r\n  handleFocus = (e) => {\r\n    this.setState({focus: true})\r\n    if (this.props.onFocus) {\r\n      this.props.onFocus(e)\r\n    }\r\n  }\r\n\r\n  handleBlur = (e) => {\r\n    this.setState({focus: false})\r\n    if (this.state.value.trim().length === 0) {\r\n      this.setState({value: ''})\r\n    }\r\n    if (this.props.onBlur) {\r\n      this.props.onBlur(e)\r\n    }\r\n  }\r\n\r\n  handleInput = (e) => {\r\n    this.setState({value: e.target.value})\r\n    if (this.props.onChange) {\r\n      this.props.onChange(e.target.value)\r\n    }\r\n  }\r\n\r\n  handleCancel = () => {\r\n    this.setState({active: false, value: ''})\r\n    if (this.props.onCancelSearch) {\r\n      this.props.onCancelSearch()\r\n    }\r\n  }\r\n\r\n  handleKeyUp = (e) => {\r\n    if (this.props.onRequestSearch && (e.charCode === 13 || e.key === 'Enter')) {\r\n      this.props.onRequestSearch(this.state.value)\r\n    } else if (this.props.cancelOnEscape && (e.charCode === 27 || e.key === 'Escape')) {\r\n      this.handleCancel()\r\n    }\r\n    if (this.props.onKeyUp) {\r\n      this.props.onKeyUp(e)\r\n    }\r\n  }\r\n\r\n  render () {\r\n    const { value } = this.state\r\n    const {\r\n      cancelOnEscape,\r\n      className,\r\n      classes,\r\n      closeIcon,\r\n      disabled,\r\n      onCancelSearch,\r\n      onRequestSearch,\r\n      searchIcon,\r\n      style,\r\n      ...inputProps\r\n    } = this.props\r\n\r\n    return (\r\n      <Paper\r\n        className={classNames(classes.root, className)}\r\n        style={style}\r\n      >\r\n        <div className={classes.searchContainer}>\r\n          <Input\r\n            {...inputProps}\r\n            onBlur={this.handleBlur}\r\n            value={value}\r\n            onChange={this.handleInput}\r\n            onKeyUp={this.handleKeyUp}\r\n            onFocus={this.handleFocus}\r\n            fullWidth\r\n            className={classes.input}\r\n            disableUnderline\r\n            disabled={disabled}\r\n          />\r\n        </div>\r\n        <IconButton\r\n          onClick={onRequestSearch}\r\n          classes={{\r\n            root: classNames(classes.iconButton, classes.searchIconButton, {\r\n              [classes.iconButtonHidden]: value !== ''\r\n            }),\r\n            disabled: classes.iconButtonDisabled\r\n          }}\r\n          disabled={disabled}\r\n        >\r\n          {React.cloneElement(searchIcon, {\r\n            classes: { root: classes.icon }\r\n          })}\r\n        </IconButton>\r\n        <IconButton\r\n          onClick={this.handleCancel}\r\n          classes={{\r\n            root: classNames(classes.iconButton, {\r\n              [classes.iconButtonHidden]: value === ''\r\n            }),\r\n            disabled: classes.iconButtonDisabled\r\n          }}\r\n          disabled={disabled}\r\n        >\r\n          {React.cloneElement(closeIcon, {\r\n            classes: { root: classes.icon }\r\n          })}\r\n        </IconButton>\r\n      </Paper>\r\n    )\r\n  }\r\n}\r\n\r\nSearchBar.defaultProps = {\r\n  className: '',\r\n  closeIcon: <ClearIcon style={{ color: grey[500] }} />,\r\n  disabled: false,\r\n  placeholder: 'Search',\r\n  searchIcon: <SearchIcon style={{ color: grey[500] }} />,\r\n  style: null,\r\n  value: ''\r\n}\r\n\r\nSearchBar.propTypes = {\r\n  /** Whether to clear search on escape */\r\n  cancelOnEscape: PropTypes.bool,\r\n  /** Override or extend the styles applied to the component. */\r\n  classes: PropTypes.object.isRequired,\r\n  /** Custom top-level class */\r\n  className: PropTypes.string,\r\n  /** Override the close icon. */\r\n  closeIcon: PropTypes.node,\r\n  /** Disables text field. */\r\n  disabled: PropTypes.bool,\r\n  /** Fired when the search is cancelled. */\r\n  onCancelSearch: PropTypes.func,\r\n  /** Fired when the text value changes. */\r\n  onChange: PropTypes.func,\r\n  /** Fired when the search icon is clicked. */\r\n  onRequestSearch: PropTypes.func,\r\n  /** Sets placeholder text for the embedded text field. */\r\n  placeholder: PropTypes.string,\r\n  /** Override the search icon. */\r\n  searchIcon: PropTypes.node,\r\n  /** Override the inline-styles of the root element. */\r\n  style: PropTypes.object,\r\n  /** The value of the text field. */\r\n  value: PropTypes.string\r\n}\r\n\r\nexport default withStyles(styles)(SearchBar)\r\n","examples":[{"name":"ExampleAllFeatures","description":"All features enabled","code":"import React from \"react\";\r\nimport SearchBar from \"ps-react/SearchBar\";\r\n\r\n/** All features enabled */\r\nclass ExampleAllFeatures extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n\r\n    this.state = {\r\n      value: \"\"\r\n    };\r\n  }\r\n\r\n  onRequestSearchHandler(query) {\r\n    console.log('HOHO, you are searching for...', query);\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div>\r\n        <SearchBar\r\n          value={this.state.value}\r\n          onChange={newValue => this.setState({ value: newValue })}\r\n          onRequestSearch={() => this.onRequestSearchHandler(this.state.value)}\r\n        />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default ExampleAllFeatures;\r\n"}]}]