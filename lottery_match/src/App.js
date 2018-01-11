import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import lottery from './lottery.gif'
import lottery_static from './lottery_static.gif'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const employees = [
  {
    "name": "張國葆",
    "title": "司長"
  },
  {
    "name": "齊永強",
    "title": "副司長"
  },
  {
    "name": "鄭榮俊",
    "title": "副司長"
  },
  {
    "name": "王萬里",
    "title": "公使"
  },
  {
    "name": "程正春",
    "title": "參事回部辦事"
  },
  {
    "name": "李國榮",
    "title": "參事回部辦事"
  },
  {
    "name": "陳弘基",
    "title": "參事回部辦事"
  },
  {
    "name": "胡聖芬",
    "title": "專門委員"
  },
  {
    "name": "丁榮祿",
    "title": "專門委員"
  },
  {
    "name": "左雅玲",
    "title": "專門委員"
  },
  {
    "name": "馬超賢",
    "title": "副參事回部辦事"
  },
  {
    "name": "李懷訓",
    "title": "科長"
  },
  {
    "name": "陳文昌",
    "title": "秘書回部辦事"
  },
  {
    "name": "陳麗珍",
    "title": "秘書回部辦事"
  },
  {
    "name": "詹修明",
    "title": "專員"
  },
  {
    "name": "徐遠明",
    "title": "薦任科員"
  },
  {
    "name": "郭世均",
    "title": "薦任科員"
  },
  {
    "name": "王嶼林",
    "title": "科員"
  },
  {
    "name": "李庭蕙",
    "title": "文書處理員"
  },
  {
    "name": "馮唯美",
    "title": "工友"
  },
  {
    "name": "鄭文琳",
    "title": "科長"
  },
  {
    "name": "王冠惠",
    "title": "秘書回部辦事"
  },
  {
    "name": "王顥融",
    "title": "薦任科員"
  },
  {
    "name": "林子恒",
    "title": "輿情小組組員"
  },
  {
    "name": "丁庭羽",
    "title": "輿情小組組員"
  },
  {
    "name": "朱華玲",
    "title": "科長"
  },
  {
    "name": "徐柏松",
    "title": "秘書回部辦事"
  },
  {
    "name": "劉晉佑",
    "title": "薦任秘書"
  },
  {
    "name": "林靖貴",
    "title": "專員"
  },
  {
    "name": "曾雅頌",
    "title": "專員"
  },
  {
    "name": "林禹貞",
    "title": "科長"
  },
  {
    "name": "張聖祺",
    "title": "秘書回部辦事"
  },
  {
    "name": "劉博樺",
    "title": "專員"
  },
  {
    "name": "周明廷",
    "title": "薦任科員"
  },
  {
    "name": "吳佳彥",
    "title": "薦任科員"
  },
  {
    "name": "林芝伃",
    "title": "文書處理員"
  },
  {
    "name": "陳筱涵",
    "title": "美術編輯"
  },
  {
    "name": "潘森識",
    "title": "外籍編輯"
  },
  {
    "name": "張  寧",
    "title": "科長"
  },
  {
    "name": "周志堅",
    "title": "秘書回部辦事"
  },
  {
    "name": "陳紫秀",
    "title": "秘書回部辦事"
  },
  {
    "name": "唐光洋",
    "title": "秘書回部辦事"
  },
  {
    "name": "林銘泉",
    "title": "秘書回部辦事"
  },
  {
    "name": "李展全",
    "title": "薦任科員"
  },
  {
    "name": "朱雪瑛",
    "title": "科長"
  },
  {
    "name": "殷正仁",
    "title": "秘書回部辦事"
  },
  {
    "name": "李佳芳",
    "title": "專員"
  },
  {
    "name": "巫易如",
    "title": "專員"
  },
  {
    "name": "潘肇德",
    "title": "秘書回部辦事"
  },
  {
    "name": "薛迪宇",
    "title": "科長"
  },
  {
    "name": "沈來儀",
    "title": "秘書回部辦事"
  },
  {
    "name": "楊少華",
    "title": "專員"
  },
  {
    "name": "紀  珊",
    "title": "編輯"
  },
  {
    "name": "陳彥仁",
    "title": "卡米爾公司"
  },
  {
    "name": "蘇啓鵬",
    "title": "卡米爾公司"
  },
  {
    "name": "楊立彥",
    "title": "科長"
  },
  {
    "name": "于國盛",
    "title": "秘書回部辦事"
  },
  {
    "name": "陳宜銘",
    "title": "秘書回部辦事"
  },
  {
    "name": "葉嘉華",
    "title": "薦任科員"
  },
  {
    "name": "黃之寅",
    "title": "外文編譯"
  },
  {
    "name": "何佳珊",
    "title": "外文編譯"
  },
  {
    "name": "鍾孟學",
    "title": "外文編譯"
  },
  {
    "name": "高志仁",
    "title": "外文編譯"
  },
  {
    "name": "郭文馨",
    "title": "外文編譯"
  },
  {
    "name": "馬士強",
    "title": "外籍編輯"
  },
  {
    "name": "傅文凱",
    "title": "外籍編輯"
  },
  {
    "name": "凱傑聖",
    "title": "外籍編輯"
  },
  {
    "name": "陳淑玲",
    "title": "秘書回部辦事"
  },
  {
    "name": "施薇雅",
    "title": "外籍編輯"
  },
  {
    "name": "丹  倪",
    "title": "外籍編輯"
  },
  {
    "name": "博　磊",
    "title": "外籍編輯"
  },
  {
    "name": "黎亞力",
    "title": "外籍編輯"
  },
  {
    "name": "永吉美幸",
    "title": "外籍翻譯"
  },
  {
    "name": "陳德銘",
    "title": "外文編輯"
  },
  {
    "name": "武秋香",
    "title": "外文編輯"
  },
  {
    "name": "金宏澔",
    "title": "攝影編輯"
  },
  {
    "name": "蕭淑憶",
    "title": "圖片編輯"
  },
  {
    "name": "陳亮君",
    "title": "副總編輯"
  },
  {
    "name": "段蜀華",
    "title": "編輯"
  },
  {
    "name": "蕭郢岑",
    "title": "美術編輯"
  },
  {
    "name": "丁樂群",
    "title": "司長"
  },
  {
    "name": "曾偉明",
    "title": "參事"
  },
  {
    "name": "陳淑姿",
    "title": "簡秘"
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      static: true,
      employees: employees.slice(0),
      selected1: [],
      selected2: [],
      newEntry: ''
    };
  }

  delayPick(matchPool) {
    return new Promise((resolve, reject) => {
      const index = Math.floor(Math.random()*this.state.employees.length)
      this.addMatch(matchPool, this.state.employees[index])
      this.remove(index)
      setTimeout(() => {
        resolve()
      }, 700)
    })
  }

  onChange(e) {
    this.setState({
      newEntry: e.target.value
    })
  }

  addMatch(matchPool, employee) {
    const newSelected = this.state[matchPool].slice(0);
    newSelected.push(employee)
    this.setState({
      [matchPool]: newSelected
    })
  }
 
  add() {
    if (this.state.newEntry.length > 0) {
      const newEmployees = this.state.employees.slice(0);
      newEmployees.splice(0,0,{
        "name" : this.state.newEntry
      })
      this.setState({
        employees: newEmployees,
        newEntry: ''
      })
    }
  }

  restart() {
    this.setState({
      employees: employees,
      selected1: [],
      selected2: [],
      newEntry: '',
      static: true
    })
  }

  remove(index) {
    const newEmployees = this.state.employees.slice(0);
    newEmployees.splice(index,1)
    this.setState({
      employees: newEmployees
    })
  }

  async start() {
    await this.setState({
      static: false
    })
    let matchPool = 'selected1';
    while(this.state.employees.length > 0 && !this.state.static) {
      await this.delayPick(matchPool)
      if (matchPool === 'selected1') {
        matchPool = 'selected2'
      } else {
        matchPool = 'selected1'
      }
    }
    this.setState({
      static: true
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mofa - 國傳司</h1>
        </header>
        <div>
          <div className='imageWrapper'>
            {this.state.static ? (
                <img width={200} src={lottery_static} alt="lottery_static" />
              ) : (
                <img width={200} src={lottery} alt="lottery" />
              )
            }
          </div>
          <Button onClick={this.start.bind(this)} bsSize="large">開始</Button>
          &nbsp;
          <Button onClick={this.restart.bind(this)} bsSize="large">重來</Button>

        </div>
        <Grid>
          <Row>
            <Col xs={4} md={4}>
              <h2>
                參加名單 ({this.state.employees.length})
              </h2>
              <div>
                   姓名 &nbsp;:&nbsp;
                  <input value={this.state.newEntry} onChange={this.onChange.bind(this)} type='text' /> &nbsp;
                  <Button onClick={this.add.bind(this)} bsSize="xsmall">加入</Button>
              </div>
              <div className='list'>
                <ReactCSSTransitionGroup transitionName="employee" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                  {this.state.employees.map((employee, index) => {
                    return (
                      <div key={employee.name} className='card'>
                        {employee.name} {employee.title ? ',' : ''} {employee.title} &nbsp;
                        <Button onClick={this.remove.bind(this, index)} bsSize="xsmall">X</Button>
                      </div>
                    )
                  })}
                </ReactCSSTransitionGroup>
              </div>
            </Col>

            <Col xs={4} md={4}>
              <h2>
                配對1 ({this.state.selected1.length})
              </h2>
              <div className='list'>
                <ReactCSSTransitionGroup transitionName="employee" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                  {this.state.selected1.map((employee, index) => {
                    return (
                      <div key={employee.name} className='card'>
                        {employee.name} {employee.title ? ',' : ''} {employee.title} &nbsp;
                      </div>
                    )
                  })}
                </ReactCSSTransitionGroup>
              </div>
            </Col>

            <Col xs={4} md={4}>
              <h2>
                配對2 ({this.state.selected2.length})
              </h2>
              <div className='list'>
                <ReactCSSTransitionGroup transitionName="employee" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                  {this.state.selected2.map((employee, index) => {
                    return (
                      <div key={employee.name} className='card'>
                        {employee.name} {employee.title ? ',' : ''} {employee.title} &nbsp;
                      </div>
                    )
                  })}
                </ReactCSSTransitionGroup>

              </div>

            </Col>
          </Row>
        </Grid>
        
      </div>
    );
  }
}

export default App;
