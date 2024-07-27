import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../global-states/store.reducer";
import {
  updateItemName,
  updateItemBrand,
  updateItemCategory,
  updateItemImages,
  updateItemDescription,
  updateItemPrice,
} from "../../global-states/product.slice";
import {
  Button,
  Callout,
  Card,
  Flex,
  Heading,
  RadioGroup,
  ScrollArea,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Sidebar } from "../component-export";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { addProductStyles } from "../../styles/product.styles";
import { sideImage } from "../../assets/image-exports";

const AddProduct: React.FC = () => {
  //selectors for the product slice
  const {
    itemName,
    itemDescription,
    itemAvailability,
    itemBrand,
    itemImages,
    itemPrice,
  } = useSelector((state: RootState) => state.product);

  //dispatch function for the update of fields
  const dispatch = useDispatch();

  //function to update states with dispatch
  const handleInputUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "itemName":
        dispatch(updateItemName(value));
        break;
      case "itemDescription":
        dispatch(updateItemDescription(value));
        break;
      case "itemCategory":
        dispatch(updateItemCategory(value));
        break;
      case "itemBrand":
        dispatch(updateItemBrand(value));
        break;
      case "itemPrice":
        dispatch(updateItemPrice(value));
    }
  };

  //selector for the user slice
  const { name } = useSelector((state: RootState) => state.user);

  return (
    <div className={`${addProductStyles.globalContainer} relative`}>
      <ScrollArea
        asChild
        scrollbars="vertical"
        type="hover"
        style={{ height: "100vh" }}
        size="1"
      >
        {/*sidebar navigation*/}
        <div className={`max-w-max fixed top-0 flex`}>
          <nav>
            <Sidebar />
          </nav>
        </div>
      </ScrollArea>

      <ScrollArea
        asChild
        scrollbars="vertical"
        type="hover"
        style={{ height: "100vh" }}
        size="1"
      >
        {/*container for elements of the adding to products page.*/}
        <Card>
          <div className={``}>
            {/*header section of the add to products page*/}
            <div>
              <Heading>
                <p>{`Welcome ${name}`}</p>
                <p>ADD TO PRODUCT COLLECTION</p>
              </Heading>
            </div>
            {/*form section for adding to products*/}
            <form action="" method="POST">
              {/*general form container*/}
              <div className={`${addProductStyles.formContainer}`}>
                {/*name input field container to add to products*/}
                <div className={`${addProductStyles.fieldContainer}`}>
                  <Text
                    as="label"
                    htmlFor="item-name"
                    className={`${addProductStyles.textColor}`}
                  >
                    What product are you adding?
                  </Text>
                  <TextField.Root
                    type="text"
                    id="item-name"
                    name="itemName"
                    value={itemName}
                    onChange={handleInputUpdate}
                    placeholder="Enter product name..."
                    className={`${addProductStyles.caretColor}`}
                  >
                    <TextField.Slot />
                  </TextField.Root>
                </div>
                {/*description input field*/}
                <div className={`${addProductStyles.fieldContainer}`}>
                  <Text
                    as="label"
                    htmlFor="item-description"
                    className={`${addProductStyles.textColor}`}
                  >
                    Describe the product
                  </Text>
                  <TextArea
                    id="item-description"
                    name="itemDescription"
                    onChange={handleInputUpdate}
                    value={itemDescription}
                    placeholder="Enter product description..."
                    className={`${addProductStyles.caretColor}`}
                    size="3"
                  />
                </div>
                {/*item category selection field*/}
                <div>
                  {/*div container for the category radio*/}
                  <div className={`flex flex-col`}>
                    <Text
                      as="label"
                      htmlFor="item-category"
                      className={`${addProductStyles.textColor} mb-4`}
                    >
                      Select all categories that apply to the product
                      {/*checkbox for the categories*/}
                    </Text>

                    <RadioGroup.Root
                      name="itemCategory"
                      className={`${addProductStyles.radioStyles}`}
                    >
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item
                          value="men"
                          className="cursor-pointer"
                        />
                        <Text>Men</Text>
                      </Flex>
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item
                          value="women"
                          className="cursor-pointer"
                        />
                        <Text>Women</Text>
                      </Flex>
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item
                          value="kids"
                          className="cursor-pointer"
                        />
                        <Text>Kids</Text>
                      </Flex>
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item
                          value="unisex"
                          className="cursor-pointer"
                        />
                        <Text>Unisex</Text>
                      </Flex>
                    </RadioGroup.Root>
                  </div>
                  {/*radio group for type of product*/}
                  <div className="mt-5">
                    <Text
                      as="label"
                      htmlFor="item-type"
                      className={`${addProductStyles.textColor}`}
                    >
                      Select the product type
                    </Text>
                    <RadioGroup.Root
                      name="itemType"
                      className={`${addProductStyles.radioStyles} mt-4`}
                    >
                      {/*flex for cloth radio*/}
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item
                          value="cloth"
                          className="cursor-pointer"
                        />
                        <Text>Cloth</Text>
                      </Flex>
                      {/*flex for accessories radio*/}
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item
                          value="accessories"
                          className="cursor-pointer"
                        />
                        <Text>Accessories</Text>
                      </Flex>
                      {/*flex for shoes radio*/}
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item
                          value="shoes"
                          className="cursor-pointer"
                        />
                        <Text>Shoes</Text>
                      </Flex>
                      {/*flex for suits radio*/}
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item value="suits" className="cursor-pointer"/>
                        <Text>Suits</Text>
                      </Flex>
                      {/*flex for officials*/}
                      <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                        <RadioGroup.Item
                          value="officials"
                          className="cursor-pointer"
                        />
                        <Text>Officials</Text>
                      </Flex>
                    </RadioGroup.Root>
                  </div>
                </div>
                {/*brand entry field*/}
                <div className={`${addProductStyles.fieldContainer}`}>
                  <Text
                    as="label"
                    htmlFor="item-brand"
                    className={`${addProductStyles.textColor}`}
                  >
                    Enter product brand
                  </Text>
                  <TextField.Root
                    placeholder="Enter product brand..."
                    name="itemBrand"
                    value={itemBrand}
                    onChange={handleInputUpdate}
                    className={`${addProductStyles.caretColor}`}
                    id="item-brand"
                  >
                    <TextField.Slot />
                  </TextField.Root>
                </div>
                {/*product availability*/}
                <div>
                  <Text as="label" className={`${addProductStyles.textColor}`}>
                    Is the product available?
                  </Text>
                  <RadioGroup.Root
                    name="itemAvailability"
                    className={`${addProductStyles.radioStyles} mt-4`}
                  >
                    {/*affirm availability*/}
                    <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                      <Text as="label" htmlFor="yes">
                        Yes
                      </Text>
                      <RadioGroup.Item
                        value={`${itemAvailability}`}
                        id="yes"
                        className="cursor-pointer"
                      />
                    </Flex>
                    <Flex className={`${addProductStyles.radioStyles} gap-3`}>
                      <Text as="label" htmlFor="no">
                        No
                      </Text>
                      <RadioGroup.Item
                        value={`${!itemAvailability}`}
                        id="no"
                        className="cursor-pointer"
                      />
                    </Flex>
                  </RadioGroup.Root>
                </div>
                {/*price input field*/}
                <div className={`${addProductStyles.fieldContainer}`}>
                  <Text
                    as="label"
                    htmlFor="item-price"
                    className={`${addProductStyles.textColor}`}
                  >
                    Enter Product Price (it may be a range)
                  </Text>
                  <TextField.Root
                    name="itemPrice"
                    placeholder="Product price..."
                    id="item-price"
                    onChange={handleInputUpdate}
                    value={itemPrice}
                  >
                    <TextField.Slot />
                  </TextField.Root>
                </div>
                {/*upload images*/}
                <div className="flex flex-col gap-5">
                  <Text
                    as="label"
                    htmlFor="item-images"
                    className={`${addProductStyles.textColor}`}
                  >
                    Add product images
                  </Text>
                  <input
                    type="file"
                    multiple
                    name="itemImages"
                    id="item-images"
                    value={itemImages}
                  />
                  <Callout.Root>
                    <Callout.Icon>
                      <InfoCircledIcon />
                      Select as many images as you want but be sure to select
                      them at the same time.
                    </Callout.Icon>
                  </Callout.Root>
                </div>
              </div>
              {/*submit button*/}
              <div className="flex mt-5 justify-end">
                <Button type="submit" size="3" className="cursor-pointer">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </ScrollArea>

      {/*side video*/}
      <div>
        <img
          className="h-screen"
          src={sideImage}
          alt="side image of a lady in a beautifully sewn dress"
        />
      </div>
    </div>
  );
};

export default AddProduct;
