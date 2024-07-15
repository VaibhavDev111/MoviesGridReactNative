import React, { useState, useEffect, useRef } from "react";
import { FlatList, View, ActivityIndicator, Text } from "react-native";
import HeaderView from "../../components/header";
import MovieItemView from "../../components/movie_item";
import page1 from "../../assets/data/page1.json";
import page2 from "../../assets/data/page2.json";
import page3 from "../../assets/data/page3.json";
import MoviesStyles from "./styles";
import { empty_string } from "../../helper/constants";
import { Strings } from "../../assets/strings";

/**
 * This view renders movies grid view. 
 * 
*/
function MoviesView() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const [page, setPage] = useState(0);
  const [isSearch, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState(empty_string);
  const flatListRef = useRef();
  
  // Uncommnent this to show loader
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => {
    // setLoading(false);
    if (!isSearch) {
      if (page == 0) setData(page1.page["content-items"].content);
      else if (page == 1)
        setData((state) => [...state, ...page2.page["content-items"].content]);
      else if (page == 2)
        setData((state) => [...state, ...page3.page["content-items"].content]);
    }
    // }, 1000);
  }, [page]);

  useEffect(() => {
    if (searchValue.length > 0 && isSearch) {
      setSearchData(
        data.filter((movie) =>
          movie?.name?.toLowerCase().includes(searchValue?.toLowerCase())
        )
      );
    } else {
      setSearchData([]);
    }
  }, [searchValue]);


  /*
  Invoked when list is scrolled to end. Handles pagination.
  */
  function onEndReached() {
    if (page <= 2) setPage((page) => page + 1);
  }

  /*
  Search icon press callback
  */
  function onSearchPress() {
    setSearch(true);
  }

  /*
  Invoked when back button on top left is pressed
  */
  function onBackPress() {
    setSearch(false);
    setPage(0);
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });

    setSearchValue(empty_string);
  }

  return (
    <View style={MoviesStyles.root}>
      <FlatList
        ref={flatListRef}
        style={MoviesStyles.flatlist}
        data={isSearch ? searchData : data}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ListHeaderComponent={() => <View style={MoviesStyles.list_header} />}
        renderItem={({ item }) => (
          <MovieItemView photo={item["poster-image"]} text={item["name"]} />
        )}
        onEndReachedThreshold={0.3}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => index.toString()}
      />

      <HeaderView
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isSearch={isSearch}
        onBackPress={onBackPress}
        onSearchPress={onSearchPress}
      />

      {isSearch && searchValue.length > 0 && searchData.length == 0 && (
        <View style={MoviesStyles.noDataRoot}>
          <Text style={MoviesStyles.no_data_text}>{Strings.no_data}</Text>
        </View>
      )}

      {/* 
      Uncommnent this to show loader
      {loading && (
        <View style={MoviesStyles.loaderRoot}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )} */}
    </View>
  );
}

export default MoviesView;
