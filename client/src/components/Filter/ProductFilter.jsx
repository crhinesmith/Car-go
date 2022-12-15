import React, {useState, useEffect} from 'react'
import {Button, Row, Col, InputNumber, Slider, Typography, Select} from 'antd';
import {ClosedCircleOutlined, SearchOutlined} from '@ant-design/icons'

const {Text} = Typography;

function CarFilters(props) {
    const {initialFilters, onSearch, onClear} = props
    const [filters, setFilters] = useState(initialFilters)
    const [make, setMake] = useState(null)
    const [year, setYear] = useState(null)

    const handleMakeChange = (e) => {
        const value = e.target.value;
        setMake(value);
        setFilters({
            ...filters,
            name: {$regex: value, $options: "i"}
        })
    }

    const handleMileageFromChange = (value) => {
        const mileage = {...filters.mileage};
        mileage.$gte = value;
        setFilters({
            ...filters,
            mileage
        })
    }

    
    const handleMileageToChange = (value) => {
        const mileage = {...filters.mileage};
        mileage.$lte = value;
        setFilters({
            ...filters,
            mileage
        })
    }

    const handleYearChange = (e) => {
        const value = e.target.value;
        setYear(value);
        setFilters({
            ...filters,
            name: {$regex: value, $options: "i"}
        })
    }
    const handleSearch = () => {
        onSearch(filters)
    }

    
    const handleClearSearch = () => {
        setMake(null);
        setYear(null);
        setFilters(initialFilters);
        onClear()
    }
    return (
        <div>
            <Row gutter={[8,8]} style={{padding: 10}}>
                <Col xs={24} sm={12} md={12} lg={6} xl={3} xxl={3}>
                    <Input placeholder="Enter Make" value={make} onChange={handleMakeChange} />
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={3} xxl={3}>
                    <Input placeholder="Enter Make" value={year} onChange={handleYearChange} />
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <Row gutter={4} align ="middle">
                        <Col span={5}>
                            <Text>Mileage From</Text>
                        </Col>
                        <Col span={13}>
                            <Slider min={0} max={250000} value={filters.mileage.$gte} onChange={handleMileageFromChange}/>                        
                        </Col>
                        <Col span={4}>
                            <InputNumber min={0} max={250000} value={filters.mileage.$gte} onChange={handleMileageToChange}/>                        
                        </Col>                
                    </Row>
                    
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <Row gutter={4} align ="middle">
                        <Col span={5}>
                            <Text>Mileage To</Text>
                        </Col>
                        <Col span={13}>
                            <Slider min={0} max={250000} value={filters.mileage.$lte}/>                        
                        </Col>
                        <Col span={4}>
                            <InputNumber min={0} max={250000} value={filters.mileage.$lte}/>                        
                        </Col>                
                    </Row>
                    
                </Col>
                <Col xs={24} sm={12} md={12} lg={6} xl={4} xxl={4}>
                    <Button type="primary" icon={<SearchOutlined/>} onClick={handleSearch} style={{width:'45%', marginRight: 10}}> Search</Button>
                    <Button type="primary" icon={<ClosedCircleOutlined/>} onClick={handleClearSearch} style={{width:'45%', marginRight: 10}}>Clear</Button>
                </Col>
            </Row>
        </div>
    )
}

export default CarFilters 