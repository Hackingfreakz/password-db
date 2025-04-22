import React from 'react';

function Card({ character, onClick }) {  // Accept onClick function as a prop
    const styles = {
        card: {
            width: "300px",
            height: "320px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            cursor: "pointer",  // Indicate it's clickable
        },
        card_img: {
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px"
        },
        card_body: {
            textAlign: "center",
        },
        card_title: {
            fontWeight: "bold",
            fontSize: "18px",
        }
    };

    return (
        <div onClick={onClick}> {/* Make entire card clickable */}
            <div style={styles.card}>
                <img src={character.image} alt={character.name} style={styles.card_img} />
                <div style={styles.card_body}>
                    <h5 style={styles.card_title}>{character.name}</h5>
                </div>
            </div>
        </div>
    );
}

export default Card;
