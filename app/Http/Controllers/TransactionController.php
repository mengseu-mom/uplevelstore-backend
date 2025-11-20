<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function createTransaction(Request $request)
    {
        $request->validate([
            'userId' => 'required|integer|exists:users,id',
            'image' => 'required|array',
            'image.*' => 'required|string',
            'name' => 'required|array',
            'payment_method' => 'required|string',
            'transaction_id' => 'nullable|string',
            'price' => 'required|array',
            'qty' => 'required|array',
            'amount' => 'required|array',
        ]);

        $transaction = Transaction::create([
            'userId' => $request->userId,
            'image' => $request->image,
            'name' => $request->name,
            'payment_method' => $request->payment_method,
            'transaction_id' => $request->transaction_id,
            'price' => $request->price,
            'qty' => $request->qty,
            'amount' => $request->amount,
            'status' => 'success',
            'paid_at' => now(),
        ]);

        return response()->json([
            'message' => 'Transaction recorded',
            'transaction' => $transaction,
        ]);
    }

    /**
     * Display the transactions by user ID.
     */
    public function showByUser($userId)
    {
        $transactions = Transaction::where('userId', $userId)->get();

        if ($transactions->isEmpty()) {
            return response()->json([
                'message' => 'No transactions found for this user.',
                'transactions' => []
            ], 404);
        }

        return response()->json([
            'message' => 'Transactions retrieved successfully.',
            'transactions' => $transactions
        ]);
    }

    /**
     * Optional: Stub methods for full resource controller.
     */
    public function store(Request $request)
    {
        // Optional: Implement if needed.
    }

    public function update(Request $request, string $id)
    {
        // Optional: Implement if needed.
    }

    public function destroy(string $id)
    {
        // Optional: Implement if needed.
    }
}
