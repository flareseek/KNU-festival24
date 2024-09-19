export interface Island {
    name: string;
    image: string;
    style: string;
}

export interface SliderSettings{
    dots: boolean;
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    initialSlide: number;
    autoplay: boolean;
    speed: number;
    autoplaySpeed: number;
}

export interface IslandItemProps extends Island {
    index: number;
}

export interface artistInfoListProps {
    name: string;
    image: string;
}