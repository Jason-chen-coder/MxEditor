// import {
//   mxConstants as mxConstants
// } from 'mxgraph-js'
// const closeIcon = require('@/assets/icon/delete.png')

import mxgraph from "../../graph/index";
const { mxConstants } = mxgraph;
const boxDomain = './icon/boxDomain.png'
const center = './icon/center.png'
const database = './icon/database.png'
const authorizate = './icon/authorizate.png'
const cluster = './icon/cluster.png'
const exchange = './icon/exchange.png'

export const toolbarItems = [
  {
    id: 'boxDomain',
    idSeed: 1,
    icon: boxDomain,
    title: '域盒子',
    width: 60,
    height: 60,
    dropAble: false, // 是否可以作为drop的对象
    style: {
      fillColor: '#FFFFFF',
      strokeColor: '#000000',
      strokeWidth: '1',
      shape: mxConstants.SHAPE_LABEL,
      align: mxConstants.ALIGN_TOP,
      verticalAlign: mxConstants.ALIGN_BOTTOM,
      imageAlign: mxConstants.ALIGN_CENTER, // 背景图的水平方向的定位
      imageVerticalAlign: mxConstants.ALIGN_TOP, // 背景图垂直方向的定位
      image: boxDomain
    }
  },
  {
    id: 'center',
    idSeed: 1,
    icon: center,
    title: '中心',
    width: 60,
    height: 60,
    dropAble: false, // 是否可以作为drop的对象
    style: {
      fillColor: '#FFFFFF', // 填充色
      strokeColor: '#000000', // 线条颜色
      strokeWidth: '1', // 线条粗细
      shape: mxConstants.SHAPE_LABEL, // 形状
      align: mxConstants.ALIGN_CENTER, // 水平方向对其方式
      verticalAlign: mxConstants.ALIGN_BOTTOM, // 垂直方向对其方式
      imageAlign: mxConstants.ALIGN_CENTER, // 图形水平方向对其方式
      imageVerticalAlign: mxConstants.ALIGN_TOP, // 图形方向对其方式
      image: center // 图形
    }
  },
  {
    id: 'group',
    idSeed: 1,
    icon: database,
    title: '数据库',
    width: 60,
    height: 60,
    dropAble: false, // 是否可以作为drop的对象
    style: {
      fillColor: '#FFFFFF', // 填充色
      strokeColor: '#000000', // 线条颜色
      strokeWidth: '1', // 线条粗细
      shape: mxConstants.SHAPE_LABEL, // 形状
      align: mxConstants.ALIGN_CENTER, // 水平方向对其方式
      verticalAlign: mxConstants.ALIGN_BOTTOM, // 垂直方向对其方式
      imageAlign: mxConstants.ALIGN_CENTER, // 图形水平方向对其方式
      imageVerticalAlign: mxConstants.ALIGN_TOP, // 图形方向对其方式
      image: database // 图形
    }
  },
  {
    id: 'authorizate',
    idSeed: 1,
    icon: authorizate,
    title: '认证',
    width: 60,
    height: 60,
    dropAble: false, // 是否可以作为drop的对象
    style: {
      fillColor: '#FFFFFF', // 填充色
      strokeColor: '#000000', // 线条颜色
      strokeWidth: '1', // 线条粗细
      shape: mxConstants.SHAPE_LABEL, // 形状
      align: mxConstants.ALIGN_CENTER, // 水平方向对其方式
      verticalAlign: mxConstants.ALIGN_BOTTOM, // 垂直方向对其方式
      imageAlign: mxConstants.ALIGN_CENTER, // 图形水平方向对其方式
      imageVerticalAlign: mxConstants.ALIGN_TOP, // 图形方向对其方式
      image: authorizate // 图形
    }
  },
  {
    id: 'cluster',
    idSeed: 1,
    icon: cluster,
    title: '集群',
    width: 60,
    height: 60,
    dropAble: false, // 是否可以作为drop的对象
    style: {
      fillColor: '#FFFFFF', // 填充色
      strokeColor: '#000000', // 线条颜色
      strokeWidth: '1', // 线条粗细
      shape: mxConstants.SHAPE_LABEL, // 形状
      align: mxConstants.ALIGN_CENTER, // 水平方向对其方式
      verticalAlign: mxConstants.ALIGN_BOTTOM, // 垂直方向对其方式
      imageAlign: mxConstants.ALIGN_CENTER, // 图形水平方向对其方式
      imageVerticalAlign: mxConstants.ALIGN_TOP, // 图形方向对其方式
      image: cluster // 图形
    }
  },
  {
    id: 'exchange',
    idSeed: 1,
    icon: exchange,
    title: '缓冲',
    width: 60,
    height: 60,
    dropAble: false, // 是否可以作为drop的对象
    style: {
      fillColor: '#FFFFFF', // 填充色
      strokeColor: '#000000', // 线条颜色
      strokeWidth: '1', // 线条粗细
      shape: mxConstants.SHAPE_LABEL, // 形状
      align: mxConstants.ALIGN_CENTER, // 水平方向对其方式
      verticalAlign: mxConstants.ALIGN_BOTTOM, // 垂直方向对其方式
      imageAlign: mxConstants.ALIGN_CENTER, // 图形水平方向对其方式
      imageVerticalAlign: mxConstants.ALIGN_TOP, // 图形方向对其方式
      image: exchange // 图形
    }
  },
  // {
  //   title: '容器',
  //   width: 200,
  //   height: 200,
  //   dropAble: true,// 是否可以作为drop的对象
  //   style: {
  //     overflow: 'fill',
  //     shape: 'swimlane',
  //     html: '1',
  //     swimlaneFillColor: '#B1EEEE',
  //     fillColor: '#3c6379',
  //     strokeColor: '#629EA0',
  //     fontColor: '#000000'
  //   },
  //   created (graph, cell, index) {
  //     const deleteIconDom = document.querySelector(`.deleteIcon_${index}`)

  //     if (deleteIconDom) {
  //       deleteIconDom.addEventListener('click', () => {
  //         graph.removeCells([cell])
  //       })
  //     }
  //   },
  //   html: (index) => `
  //           <div style="margin: 0; padding: 0 5px; height: 100%; width: 100%; display: flex; justify-content: space-between; align-items: center; position: relative;">
  //             <span style="color: cornsilk; font-size: 20px; font-weight: 600; display: inline-block">容器</span>
  //             <img style="height: 20px; width: 20px; cursor: pointer;" class="deleteIcon_${index}" src="${closeIcon}" alt=""/>
  //           </div>
  //         `.replace(/[\r\n]/g, '')
  // }
]

