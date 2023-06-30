import { useNavigate, useParams } from 'react-router-dom'
import '../styles/Apartment.scss'
import Slideshow from '../components/Slideshow'
import { datas } from '../datas/Services'
import TagName from '../components/TagName'
import { useEffect } from 'react'
import { useState } from 'react'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'

function Apartment() {
    const { apartmentId } = useParams()
    const [rightPage, updateRightPage] = useState(false)
    const navigate = useNavigate()
    const currentDatas = datas.find((apartment) => apartment.id === apartmentId)

    useEffect(() => {
        if (apartmentId === undefined || currentDatas === undefined) {
            navigate('*')
        } else {
            updateRightPage(true)
        }
    }, [apartmentId, currentDatas, navigate])

    return (
        <div>
            {rightPage ? (
                <div className="apartment">
                    <Slideshow currentDatas={currentDatas} />
                    <div className="apartment__datas">
                        <div className="apartment__datas--orientation">
                            <div>
                                <h1 className="apartment__title">
                                    {currentDatas.title}
                                </h1>
                                <p className="apartment__location">
                                    {currentDatas.location}
                                </p>
                                <div className="apartment__tagnames">
                                    {currentDatas.tags.map((tag, index) => (
                                        <TagName
                                            key={`${tag}-${index}`}
                                            tagText={tag}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="apartment__host">
                                    <p className="apartment__hostName">
                                        {currentDatas.host.name}
                                    </p>
                                    <img
                                        className="apartment__hostPhoto"
                                        src={currentDatas.host.picture}
                                        alt="Hôte de l'appartement"
                                    />
                                </div>
                                <Rating rating={currentDatas.rating} />
                            </div>
                        </div>
                        <div className="apartment__collapseComponents">
                            <Collapse
                                title="Description"
                                description={currentDatas.description}
                            />
                            <Collapse
                                title="Equipements"
                                description={currentDatas.equipments}
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Apartment
