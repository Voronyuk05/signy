import { useRef, useEffect, createRef, RefObject } from "react";
import styles from './mapComponent.module.scss'

export const MapComponent = ({
    center,
    zoom,
  }) => {
    const ref = createRef()

    useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    });
  
    return <div className={styles.map} ref={ref} id="map" />;
}