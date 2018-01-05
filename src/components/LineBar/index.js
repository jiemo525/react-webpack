/**
 * 折线柱状图
 */
import React from 'react';
import { Card } from 'antd';
import G2 from '@antv/g2';
import './index.scss';

class LineBar extends React.Component {

    componentDidMount() {
        const data = [
            { genre: 'Sports', sold: 275 },
            { genre: 'Strategy', sold: 115 },
            { genre: 'Action', sold: 120 },
            { genre: 'Shooter', sold: 350 },
            { genre: 'Other', sold: 150 }
        ];
        const Shape = G2.Shape;
        Shape.registerShape('interval', 'triangle', {
            getPoints(cfg) {
                const x = cfg.x;
                const y = cfg.y;
                const y0 = cfg.y0;
                const width = cfg.size;
                return [
                    { x: x - width / 2, y: y0 },
                    { x: x, y: y },
                    { x: x + width / 2, y: y0 }
                ]
            },
            draw(cfg, group) {
                const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
                const polygon = group.addShape('polygon', {
                    attrs: {
                        points: [
                            [points[0].x, points[0].y],
                            [points[1].x, points[1].y],
                            [points[2].x, points[2].y]
                        ],
                        fill: cfg.color
                    }
                });
                return polygon; // 将自定义Shape返回
            }
        });
        const chart = new G2.Chart({
            container: 'c2',
            width: 600,
            height: 300
        });
        chart.source(data);


        chart.interval().position('genre*sold')
            // .color('genre');//写法一
            // .color('genre', 'pink');//写法二
            // .color('genre', ['red', 'green', 'yellow', 'pink', 'blue']);//写法三
            // .color('genre', 'green-yellow');//写法四
            // .color('sold', sold => {
            //     if (sold < 200) {
            //         return 'yellow';
            //     } else {
            //         return 'green';
            //     }

            // });//写法五
            .color('genre', 'pink').opacity(0.5)
            // .shape('triangle');
        chart.line().position('genre*sold')
        chart.point().position('genre*sold').size(4).shape('circle').style({
            lineWidth: 1
        });
        chart.render();
    }
    render() {

        return (
            <Card >
                <span id="c2"></span>
            </Card>
        );
    }
}

export default LineBar;