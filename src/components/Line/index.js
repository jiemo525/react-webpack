/**
 * 折线柱状图
 */
import React from 'react';
import { Card } from 'antd';
import G2 from '@antv/g2';

class Line extends React.Component {

    componentDidMount() {
        const data = [
            { genre: 'Sports', sold: 275,  sold1: 100 },
            { genre: 'Strategy', sold: 115 , sold1: 101},
            { genre: 'Action', sold: 120 , sold1: 102 },
            { genre: 'Shooter', sold: 350, sold1: 150 },
            { genre: 'Other', sold: 150, sold1: 190 }
        ];
      
        const chart = new G2.Chart({
            container: 'c1',
            width: 600,
            height: 300
        });
        chart.source(data);
        
        chart.tooltip({
            crosshairs: {
              type: 'line'
            }
          });
        chart.line().position('genre*sold').color('yellow');
        chart.point().position('genre*sold').size(4).shape('circle').style({
            lineWidth: 1
        });
        chart.line().position('genre*sold1').color('green');
        chart.point().position('genre*sold1').size(4).shape('circle').style({
            lineWidth: 1
        });
        chart.render();
    }
    render() {

        return (
            <Card>
                <span id="c1"></span>
            </Card>
        );
    }
}

export default Line;