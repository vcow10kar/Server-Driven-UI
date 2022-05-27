package com.example.androidapp.components.feed

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.androidapp.models.FeedColumn
import type.SignalValuePairKey

@Composable
fun FeedFavouriteCount(feedFavouriteCount: FeedColumn.FeedFavouriteCount, viewModel: FeedFavouriteCountViewModel = viewModel()) {
    var count by remember {
        mutableStateOf(feedFavouriteCount.count)
    }

    feedFavouriteCount.signal?.let {
        viewModel.listenTo(it).subscribe { event ->
            event.values?.forEach { value ->
                if (value.key == SignalValuePairKey.COUNT) {
                    count = value.value
                }
            }
        }
    }

    Column(horizontalAlignment = getAlignment(feedFavouriteCount.align), modifier = Modifier.padding(start = 6.dp)) {
        Text(text = count)
    }
}