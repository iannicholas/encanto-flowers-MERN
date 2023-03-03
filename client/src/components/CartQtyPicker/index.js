// Import useEffect from React.
import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { UPDATE_CART_QUANTITY } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import "./style.css";

export default function CartQtyPicker(item) {
    const thisItem = item.item;
    const [state, dispatch] = useStoreContext();

  const updateQuantity = (plusminus) => {
    if (plusminus === "plus") {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: thisItem._id,
        purchaseQuantity: thisItem.purchaseQuantity + 1,
      });
      idbPromise("cart", "put", {
        ...thisItem,
        purchaseQuantity: thisItem.purchaseQuantity + 1,
      });
    } else if (plusminus==="minus" && thisItem.purchaseQuantity > 1) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: thisItem._id,
        purchaseQuantity: thisItem.purchaseQuantity - 1,
      });
      idbPromise("cart", "put", {
        ...thisItem,
        purchaseQuantity: thisItem.purchaseQuantity - 1,
      });
    }
  };

  return (
    <Container className="button-container-cart">
      <Row>
        <Col>
          <Button
            onClick={()=>{updateQuantity("minus")}}
            className="button-qty-cart button-sel-cart"
          >
            -
          </Button>
        </Col>
        {thisItem.purchaseQuantity}
        <Col>
          <Button
            onClick={() => {updateQuantity("plus")}}
            className="button-qty-cart button-sel-cart"
          >
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
